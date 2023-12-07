<?php

/**
 * Plugin Name:       Orioly Book Now Plugin
 * Plugin URI:        http://www.orioly.com
 * Description:       Orioly WordPress plugin helps you easily integrate a "Book Now" button from your Orioly account. It will help you add short code on your pages or posts.
 * Version:           1.0.1
 * Author:            Orioly Inc.
 * Author URI:        http://www.orioly.com
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       orioly
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if (!defined('WPINC')) {
    die;
}

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-orioly-activator.php
 */
function activate_orioly()
{
    require_once plugin_dir_path(__FILE__) . 'includes/class-orioly-activator.php';
    Orioly_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-orioly-deactivator.php
 */
function deactivate_orioly()
{
    require_once plugin_dir_path(__FILE__) . 'includes/class-orioly-deactivator.php';
    Orioly_Deactivator::deactivate();
}

register_activation_hook(__FILE__, 'activate_orioly');
register_deactivation_hook(__FILE__, 'deactivate_orioly');

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path(__FILE__) . 'includes/class-orioly.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function run_orioly()
{

    $plugin = new Orioly();
    $plugin->run();

}

run_orioly();
