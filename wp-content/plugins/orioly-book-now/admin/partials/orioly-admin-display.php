<?php
/**
 * Provide a admin area view for the plugin
 *
 * This file is used to markup the admin-facing aspects of the plugin.
 *
 * @link       http://www.orioly.com
 * @since      1.0.0
 *
 * @package    Orioly
 * @subpackage Orioly/admin/partials
 */
?>
<div class="wrap">
    <h2><?php echo esc_html(get_admin_page_title()); ?></h2>
    <div id="poststuff">
        <div id="post-body" class="metabox-holder columns-2">
            <div id="postbox-container-2 orioly-settings-container" class="postbox-container">
                <form method="post" action="options.php">
                    <div id="normal-sortables" class="meta-box-sortables ui-sortable">
                        <div id="itsec_get_started" class="postbox ">
                            <h3 class="hndle"><span>Orioly API key settings</span></h3>
                            <div class="inside orioly-settings-description">
                                <p>Where to get your Orioly "Book Now" button?

                                </p>
                                <ol>
                                    <li>Login to your Orioly app account</li>
                                    <li>Click on the bottom left settings icon.</li>
                                    <li>Copy your "Book Now API key" and paste it on this page.</li>
                                </ol>
                            </div>
                            <div class="inside">
                                <?php

                                settings_fields('orioly_options');
                                do_settings_sections('orioly-api');
                                submit_button('Save');
                                ?>
                                <div class="clear"></div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>