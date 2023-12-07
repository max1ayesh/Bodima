<?php

/**
 * The admin-specific functionality of the plugin.
 *
 * @package    Orioly
 * @subpackage Orioly/admin
 * @author     Orioly Inc. <info@orioly.com>
 */
class Orioly_Admin
{

    /**
     * The ID of this plugin.
     *
     * @since    1.0.0
     * @access   private
     * @var      string $plugin_name The ID of this plugin.
     */
    private $plugin_name;

    /**
     * The version of this plugin.
     *
     * @since    1.0.0
     * @access   private
     * @var      string $version The current version of this plugin.
     */
    private $version;

    /**
     * Initialize the class and set its properties.
     *
     * @since    1.0.0
     * @param      string $plugin_name The name of this plugin.
     * @param      string $version The version of this plugin.
     */
    public function __construct($plugin_name, $version)
    {
        $this->plugin_name = $plugin_name;
        $this->version = $version;

        // Display the admin notification
        add_action('admin_notices', [
            $this,
            'activate_notification'
        ]);
    }

    /**
     * Register the JavaScript for the public-facing side of the site.
     *
     * @since    1.0.0
     */
    public function enqueue_scripts()
    {
        wp_enqueue_script($this->plugin_name, plugin_dir_url(__FILE__) . 'js/orioly-admin.js', ['jquery'], $this->version, false);
        wp_localize_script($this->plugin_name, 'url',
            [
                'admin_ajax' => admin_url('admin-ajax.php'),
                'postNonce'  => wp_create_nonce('myajax-post-nonce')
            ]
        );

        wp_register_style('admin-orioly-book-now-styles', plugins_url('style/orioly-admin.css', __FILE__));
        wp_enqueue_style('admin-orioly-book-now-styles');
    }

    /**
     * Register the Settings page.
     * @since    1.0.0
     */
    public function plugin_name_admin_menu()
    {

        add_options_page(__('Orioly Book Now', $this->plugin_name), __('Orioly Book Now', $this->plugin_name), 'manage_options', $this->plugin_name, [
            $this,
            'display_plugin_admin_page'
        ]);

    }

    /**
     * Callback function for the admin settings page.
     *
     * @since    1.0.0
     */
    public function display_plugin_admin_page()
    {
        require_once plugin_dir_path(dirname(__FILE__)) . 'admin/partials/orioly-admin-display.php';
    }

    /**
     * Settings API
     *
     * @since    1.0.0
     */
    public function settings_api_init()
    {

        register_setting(
            $this->plugin_name . '_options',
            $this->plugin_name . '_options',
            [
                $this,
                'settings_sanitize'
            ]
        );
        add_settings_section(
            $this->plugin_name . '-options', // section
            apply_filters($this->plugin_name . '-display-section-title', __('', $this->plugin_name)),
            [
                $this,
                'display_options_section'
            ],
            $this->plugin_name . '-api'
        );
        add_settings_field(
            'api-key',
            apply_filters($this->plugin_name . '-api-key', __('Orioly Book Now API key:', $this->plugin_name)),
            [
                $this,
                'api_key'
            ],
            $this->plugin_name . '-api',
            $this->plugin_name . '-options'
        );

    }

    /**
     * Settings Sanitize - security thing
     *
     * @since    1.0.0
     */
    public function settings_sanitize($input)
    {
        $new_input = [];
        if (isset($input)) {
            foreach ($input as $key => $val) {
                $new_input[$key] = sanitize_text_field($val);
            }
        }

        return $new_input;
    }

    /**
     * Settings Section title
     *
     * @since    1.0.0
     */
    public function display_options_section($params)
    {
        echo '<p>' . $params['title'] . '</p>';
    }

    /**
     * Settings API Key Field
     *
     * @since    1.0.0
     */
    public function api_key()
    {
        $options = get_option($this->plugin_name . '_options');
        $option = "";

        if (!empty($options['api-key'])) {
            $option = $options['api-key'];
        }
        ?>
        <textarea type="text" id="<?php echo $this->plugin_name; ?>_options[api-key]"
                  name="<?php echo $this->plugin_name; ?>_options[api-key]"
                  class="orioly-book-now-api-input"><?php echo $option; ?>
		</textarea>
        <?php
    }

    /**
     *  HTML Part of Orioly lightbox
     *
     * @since    1.0.0
     */
    public function orioly_my_display_callback()
    {
        $data = ORIOLY_DBModel::get_all(); ?>
        <div id="orioly-insert" style="display:none;">
            <label>Please choose an activity for which you want to insert a booking button.</label>
            <br/>
            <select id="orioly-select"></select>
            <br/>
            <div>
                <a href="#" id="orioly-insert-button" class="button button-primary button-large">Insert</a>
            </div>
        </div>
        <?php
    }

    /**
     * Orioly Button above content
     *
     * @since    1.0.0
     */
    public function add_my_media_button()
    {
        echo '<a href="#" id="insert-my-media" class="button">Orioly Button</a>';
    }

    /**
     * Orioly Update Ajax Call
     *
     * @since    1.0.0
     */
    public function orioly_update()
    {

        $options = get_option($this->plugin_name . '_options');
        $api_key = $options['api-key'];

        if (defined('WP_ORIOLY_API_URL')) {
            $url = WP_ORIOLY_API_URL;
        } else {
            $url = "http://api.orioly.com/booker/activity-buttons";
        }


        $args = [
            'method'      => "GET",
            'timeout'     => 120,
            'redirection' => 5,
            'httpversion' => '1.0',
            'blocking'    => true,
            'headers'     => [
                'Content-Type'            => 'application/json',
                'Orioly-Book-Now-Api-Key' => $api_key
            ],
            'body'        => null
        ];

        $response = wp_remote_get($url, $args);
        $responseBody = null;

        if ($response['response']['code'] == 200) {
            $responseBody = $response['body'];
            $data = json_decode($responseBody, true);
            ORIOLY_DBModel::delete();
            foreach ($data as $row) {
                ORIOLY_DBModel::insert($row);
            }
        }

        wp_send_json_success($responseBody);

    }

    /**
     * Orioly Shortcode
     *
     * @since    1.0.0
     */
    public function orioly_shortcode($atts)
    {
        $refcode = null;
        extract(shortcode_atts(['refcode' => ''], $atts));

        $code = ORIOLY_DBModel::get_where("activityReferenceCode", $refcode);

        return $code->buttonCode;
    }

    function activate_notification()
    {
        if (!get_option('orioly_options')) {
            $html = '<div class="updated">';
            $html .= '<p class="orioly-book-plugin-installed">';
            $html .= __('You activated Orioly Book Now plugin. In order to start adding booking buttons, please add your Book Now API key. You need to add it in <a href="admin.php?page=orioly">plugin settings</a>.', 'orioly-book-now');
            $html .= '</p>';
            $html .= '</div>';

            echo $html;
        }
    }

}
