(function ($) {
    'use strict';

    $(document).ready(function () {
        $('#insert-my-media').on("click", open_orioly);
        $("#orioly-insert-button").on("click", insert_shortcode)
    });

    function open_orioly(e) {
        e.preventDefault();
        tb_show('Select Orioly Book Now button', '#TB_inline?height=200&amp;width=500&amp;inlineId=orioly-insert', '');
        gens_resize_thickbox();
        $.ajax({
            url: url.admin_ajax,
            type: 'post',
            data: {
                'postNonce': url.postNonce,
                'action': 'orioly_update'
            },
            success: function (json) {
                var data = JSON.parse(json.data);
                $('#orioly-select').empty();
                $.each(data, function (k, v) {
                    $('#orioly-select').append($('<option>').text(v.activityTitle).attr('value', v.activityReferenceCode));
                });
            },
            error: function (error) {
                console.log(error);
            }
        });
    }

    function gens_resize_thickbox() {
        jQuery(document).find('#TB_window').width("550").height("200");
    }

    function insert_shortcode(e) {
        e.preventDefault();
        wp.media.editor.insert('[orioly-button refcode="' + $("#orioly-select").val() + '"]');
    }

})(jQuery);
