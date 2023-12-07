<?php

/**
 * Orioly MySQL Class, used for all SQL queries.
 *
 * @package    Orioly
 * @subpackage Orioly/admin
 * @author     Orioly Inc. <support@orioly.com>
 */
abstract class ORIOLY_DBModel
{

    static $primary_key = 'id';

    static function get_all()
    {
        global $wpdb;

        return $wpdb->get_results(self::_fetch_all());
    }

    private static function _fetch_all()
    {
        global $wpdb;
        $sql = sprintf('SELECT * FROM %s', self::_table());

        return $sql;
    }

    protected static function _table()
    {
        global $wpdb;

        return $wpdb->prefix . 'orioly_data';
    }

    static function get($value)
    {
        global $wpdb;

        return $wpdb->get_row(self::_fetch_sql($value));
    }

    private static function _fetch_sql($value)
    {
        global $wpdb;
        $sql = sprintf('SELECT * FROM %s WHERE %s = %%s', self::_table(), static::$primary_key);

        return $wpdb->prepare($sql, $value);
    }

    static function get_where($value, $where)
    {
        global $wpdb;

        return $wpdb->get_row(self::_fetch_where($value, $where));
    }

    private static function _fetch_where($value, $where)
    {
        global $wpdb;
        $sql = sprintf('SELECT * FROM %s WHERE %s = %%s', self::_table(), $value);

        return $wpdb->prepare($sql, $where);
    }

    static function insert($data)
    {
        global $wpdb;
        $wpdb->insert(self::_table(), $data);
    }

    static function delete()
    {
        global $wpdb;
        $wpdb->query("TRUNCATE TABLE " . self::_table());
    }

}

class ORIOLY_Data extends Orioly_DBModel
{

    static function create_table()
    {
        global $wpdb;
        $table = $wpdb->prefix . 'orioly_data';
        $sql = "CREATE TABLE " . $table . " (
            id mediumint(9) NOT NULL AUTO_INCREMENT,
            activityTitle VARCHAR(255),
            activityReferenceCode VARCHAR(255),
            buttonCode text,
            UNIQUE KEY id (id)
            );";
        require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
        dbDelta($sql);
    }

}

?>