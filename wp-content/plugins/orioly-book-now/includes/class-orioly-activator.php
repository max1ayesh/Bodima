<?php

/**
 * Fired during plugin activation.
 *
 * This class defines all code necessary to run during the plugin's activation.
 *
 * @since      1.0.0
 * @package    Orioly
 * @subpackage Orioly/includes
 * @author     Orioly Inc. <support@orioly.com>
 */
class Orioly_Activator
{

    /**
     * Short Description. (use period)
     *
     * Long Description.
     *
     * @since    1.0.0
     */
    public static function activate()
    {
        ORIOLY_Data::create_table();
    }

}
