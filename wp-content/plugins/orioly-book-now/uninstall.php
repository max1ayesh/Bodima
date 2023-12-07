<?php

/**
 * Fired when the plugin is uninstalled.
 *
 * @link       http://www.orioly.com
 * @since      1.0.0
 *
 * @package    Orioly
 */

// If uninstall not called from WordPress, then exit.
if (!defined('WP_UNINSTALL_PLUGIN')) {
    exit;
}

global $wpdb;
$table = $wpdb->prefix . 'orioly_data';
$wpdb->query("DROP TABLE IF EXISTS $table");