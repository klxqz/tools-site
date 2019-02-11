
$('.settings-button').click(function () {
    var d = $('#dialog');
    var c = d.find('.cart');

    console.log(c.length);
    c.html('<div class="settings_dialog_themes"> <form id="settings-theme-form" method="post">' + $('.settings-panel #settings-theme-form').html() + '</form></div>');
    c.prepend('<a href="#" class="dialog-close">&times;</a>');
    d.show();
    $('html').addClass('dialog-open');
    return false;
});
$(document).ready(function () {
    $('.select-img').click(function () {
        $(this).closest('.settings-block').find('span b').val($(this).text());
        $(this).closest('.settings-block').find('input[type="hidden"]').val($(this).data('value')).change();
        $(this).addClass('active').siblings().removeClass('active');
        return false;
    });
});

$(function () {
    function initSettingsPanel(container) {
        $(container).find('.color-settings').each(function () {
            var input = $(this);
            var replacer = $('<span class="color-replacer">' +
                    '<i class="icon16 color" style="background: #' + input.val().substr(1) + '"></i>' +
                    '</span>').insertAfter(input);
            var picker = $('<div style="display:none;" class="color-picker"></div>').
                    insertAfter(replacer);
            var farbtastic = $.farbtastic(picker, function (color) {
                replacer.find('i').css('background', color);
                input.val(color);
            });
            farbtastic.setColor(input.val());
            replacer.click(function () {
                picker.slideToggle(200);
                return false;
            });
            var timer_id;
            input.unbind('keydown').bind('keydown', function () {
                if (timer_id) {
                    clearTimeout(timer_id);
                }
                timer_id = setTimeout(function () {
                    farbtastic.setColor(input.val());
                }, 250);
            });

        });
        $(container).find('input[name="theme_settings[color_scheme]"]').change(function () {
            if ($(this).val() == 'users') {
                $(container).find('.custom-color-scheme').slideDown(300);
            } else {
                $(container).find('.custom-color-scheme').slideUp(300);
            }
        });



    }


    $('.settings-button').click(function () {
        var d = $('#dialog');
        var c = d.find('.content');
        c.html($('#settings-theme-form').clone());
        c.prepend('<a href="#" class="dialog-close">&times;</a>');
        d.show();
        $('html').addClass('dialog-open');
        initSettingsPanel(d);
        return false;
    });
});