/********************************** swipe ********************************************/
jQuery(document).ready(function () {
    jQuery('body .swipe-left').swiperight(function () {
        jQuery('body').addClass('ind');
    })
    jQuery('body').swipeleft(function () {
        jQuery('body').removeClass('ind');
    })
    jQuery('#page').click(function () {
        if (jQuery(this).parents('body').hasClass('ind')) {
            jQuery(this).parents('body').removeClass('ind');
            return false
        }
    })
    jQuery('.swipe-control').click(function () {
        if (jQuery(this).parents('body').hasClass('ind')) {
            jQuery(this).parents('body').removeClass('ind');
            return false
        }
        else {
            jQuery(this).parents('body').addClass('ind');
            return false
        }
    })
});


/********************************************************************************menu********************************************************/
jQuery(document).ready(function () {
    (function ($) { //create closure so we can safely use $ as alias for jQuery
        $(document).ready(function () {
            var exampleOptions = {
                speed: 'fast'
            }
            // initialise plugin
            var example = $('#menu').superfish(exampleOptions);
        });

    })(jQuery);
});
/***********************************************************************backtotop*******************************************************************/
jQuery(document).ready(function () {
    var IE = '\v' == 'v';
    // hide #back-top first
    jQuery("#back-top").hide();
    // fade in #back-top
    jQuery(function () {
        jQuery(window).scroll(function () {
            if (!IE) {
                if (jQuery(this).scrollTop() > 100) {
                    jQuery('#back-top').fadeIn();
                } else {
                    jQuery('#back-top').fadeOut();
                }
            }
            else {
                if (jQuery(this).scrollTop() > 100) {
                    jQuery('#back-top').show();
                } else {
                    jQuery('#back-top').hide();
                }
            }
        });

        // scroll body to 0px on click
        jQuery('#back-top a').click(function () {
            jQuery('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });

});
/************************************************************************************************************************************************/
$(function () {
    $('header .links li').last().addClass('last');
    $('.breadcrumb a').last().addClass('last');
    $('.cart tr').eq(0).addClass('first');
});

/********************************************************************************************************************************************/
$(document).ready(function () {
    $('.jcarousel-list li a img').css({opacity: '0.3'});
    $('.jcarousel-list li a img').hover(function () {
        jQuery(this).stop(true, false).animate({opacity: '1'}, {duration: 250});
    }, function () {
        jQuery(this).stop(true, false).animate({opacity: '0.3'}, {duration: 250});
    }
    )
});




$(document).ready(function () {

    /********************************************************************************************/
    jQuery('.header-button').on("click", function () {
        var ul = jQuery(this).find('ul')
        if (ul.is(':hidden'))
            ul.slideDown()
                    , jQuery(this).addClass('active')
        else
            ul.slideUp()
                    , jQuery(this).removeClass('active')
        jQuery('.header-button').not(this).find('ul').slideUp()
        return false
    });
    jQuery(document).click(function () {
        jQuery('.header-button').removeClass('active').find('ul').slideUp()
    });
    /***********************************************************************************/

    jQuery(document).ready(function () {
        if ($(body).width() < 767) {
            jQuery('.top-search').on("click", function () {
                if ($('#search').css('display') == 'none') {
                    $('#search').animate({height: 'show'}, 400);
                } else {
                    $('#search').animate({height: 'hide'}, 200);
                }
            });

            jQuery(document).on("click touchstart", function () {
                $('#search').animate({height: 'hide'}, 200);
            });
            jQuery('#search').on("click touchstart", function (event) {
                event.stopPropagation();
            });
            jQuery('.top-search').on("click touchstart", function (event) {
                event.stopPropagation();
            });
        }
        ;

    });




    jQuery("#menu-icon").on("click", function () {
        jQuery(".sf-menu-phone").slideToggle();
        jQuery(this).toggleClass("active");
    });

    jQuery('.sf-menu-phone').find('li.parent').append('<i class="fa fa-angle-down"></i>');
    jQuery('.sf-menu-phone li.parent i').on("click", function () {
        if (jQuery(this).hasClass('fa fa-angle-up')) {
            jQuery(this).removeClass('fa fa-angle-up').parent('li.parent').find('> ul').slideToggle();
        }
        else {
            jQuery(this).addClass('fa fa-angle-up').parent('li.parent').find('> ul').slideToggle();
        }
    });



});
/************************************************************************************************shadow height*****************************************************************************************************/
var sect = 1;
$(document).ready(function () {
    $('.shadow').height($('#page').height());

    $(window).resize(function () {
        $('.shadow').height($('#page').height());
    });

    var sects = $('.shadow').size();

    $('.swipe').height($(window).height() - 50);

    $(window).resize(function () {
        $('.swipe').height($(window).height() - 50);
    });

    var sects = $('.swipe').size();

});






/************************************************************************************************************/
$(document).ready(function () {
    if ($('body').width() < 767) {
        leftColumn = $('body').find('#column-left');
        leftColumn.remove().insertAfter('#content');
        jQuery('.col-sm-3 .box-heading').append('<i class="fa fa-plus-circle"></i>');
        jQuery('.col-sm-3 .box-heading').on("click", function () {
            if (jQuery(this).find('i').hasClass('fa-minus-circle')) {
                jQuery(this).find('i').removeClass('fa-minus-circle').parents('.col-sm-3 .box').find('.box-content').slideToggle();
            }
            else {
                jQuery(this).find('i').addClass('fa-minus-circle').parents('.col-sm-3 .box').find('.box-content').slideToggle();
            }
        })

    }
    ;


    /****************************products info************************************/
    if ($('body').width() < 767) {
        jQuery('.tab-heading').append('<i class="fa fa-plus-circle"></i>');
        jQuery('.tab-heading').on("click", function () {
            if (jQuery(this).find('i').hasClass('fa-minus-circle')) {
                jQuery(this).find('i').removeClass('fa-minus-circle').parents('.tabs').find('.tab-content').slideToggle();
            }
            else {
                jQuery(this).find('i').addClass('fa-minus-circle').parents('.tabs').find('.tab-content').slideToggle();
            }
        })
    }
    ;




});

/******************************************************Aside box category**************************************************************************************/
$(document).ready(function () {
    jQuery('.box .box-category').find('li.parent').prepend('<i class="fa fa-chevron-circle-down"></i>');
    jQuery('.box .box-category li.parent i').on("click", function () {
        if (jQuery(this).hasClass('fa-chevron-circle-up')) {
            jQuery(this).removeClass('fa-chevron-circle-up').parent('li.parent').find('> ul').slideToggle();
        }
        else {
            jQuery(this).addClass('fa-chevron-circle-up').parent('li.parent').find('> ul').slideToggle();
        }
    });

    if ($('.category-tree .selected').length > 0) {
        jQuery('.category-tree .selected > i').addClass('fa-chevron-circle-up').parent('li.parent').find('> ul').slideToggle();
        $('.category-tree .selected').parents('li.parent').find('> i').addClass('fa-chevron-circle-up').parent('li.parent').find('> ul').slideToggle();
        $('.category-tree .selected').parents('li.parent').addClass('selected');
    }
});


/************************************************/

jQuery(document).ready(function () {
    $("ul.currency a").click(function () {
        var url = location.href;
        if (url.indexOf('?') == -1) {
            url += '?';
        } else {
            url += '&';
        }
        location.href = url + 'currency=' + $(this).data('value');
        return false;
    });
});





$(document).ready(function () {

    if ($('body').width() < 980) {
        $('#cart .heading span.link_a').live("click", function () {
            if ($('#cart').hasClass('active')) {
                jQuery('#cart').removeClass('active');
            }
            else {
                $('#cart').addClass('active');
            }
        })

    } else {
        $('#cart > .heading span.link_a').live('mouseover', function () {
            $('#cart').addClass('active');


            $('#cart').live('mouseleave', function () {
                $(this).removeClass('active');
            });
        });

    }

    /* Mega Menu */
    $('#menu ul > li > a + div').each(function (index, element) {
        // IE6 & IE7 Fixes
        if ($.browser.msie && ($.browser.version == 7 || $.browser.version == 6)) {
            var category = $(element).find('a');
            var columns = $(element).find('ul').length;

            $(element).css('width', (columns * 143) + 'px');
            $(element).find('ul').css('float', 'left');
        }

        var menu = $('#menu').offset();
        var dropdown = $(this).parent().offset();

        i = (dropdown.left + $(this).outerWidth()) - (menu.left + $('#menu').outerWidth());

        if (i > 0) {
            $(this).css('margin-left', '-' + (i + 5) + 'px');
        }
    });

    // IE6 & IE7 Fixes
    if ($.browser.msie) {
        if ($.browser.version <= 6) {
            $('#column-left + #column-right + #content, #column-left + #content').css('margin-left', '195px');

            $('#column-right + #content').css('margin-right', '195px');

            $('.box-category ul li a.active + ul').css('display', 'block');
        }

        if ($.browser.version <= 7) {
            $('#menu > ul > li').bind('mouseover', function () {
                $(this).addClass('active');
            });

            $('#menu > ul > li').bind('mouseout', function () {
                $(this).removeClass('active');
            });
        }
    }

});


$(document).ready(function () {
    $(".mini-cart-info").on('click', '.remove', function () {
        var product_block = $(this).closest('tr');
        var cart_total = $("#cart");
        $.post(cart_url + 'delete/', {
            id: product_block.data('id')
        }, function (response) {
            if (response.status == 'ok') {
                /* подсветка и счетчик panel*/
                var now_int = $("#panel .cart .count").text();
                $('#panel .cart .count').html(response.data.count);
                var new_int = $("#panel .cart .count").text();
                punsh_utdate(now_int, new_int, 'cart');
                if (response.data.count > 0) {
                    $('#panel .cart').removeAttr('disabled');
                }
                
                product_block.remove();
                cart_total.find('.shopping_cart_total').html(response.data.total);
                cart_total.find('.shopping_cart_discount').html(response.data.discount);
                cart_total.find('#cart-total2').html(response.data.count);
                $('#panel .cart .count').html(response.data.count);
                if (response.data.count == 0) {
                    $('#panel .cart').attr('disabled', 'disabled');
                }
            }
        }, 'json');
        return false;
    });
});

jQuery(function ($) {
    $(document).ready(function () {
        if (!is_autocomplete) {
            return false;
        }
        $('#search_query_top').autocomplete({
            delay: 500,
            minLength: 3,
            source: function (request, response) {
                request.term = request.term.replace(/^\s+|\s+$/g, '');
                var query = request.term.replace(/\s+/g, '+');
                $.ajax({
                    url: shop_search_url + '?query=' + encodeURIComponent(query),
                    type: "GET",
                    dataType: "html",
                    success: function (data) {
                        var items = $.map($(data).find('#product-list .product-grid ul li:lt(' + 5 + ') .ajax_product_info'), function (item) {
                            return {
                                label: $(item).data('name'),
                                value: $(item).data('name'),
                                url: $(item).data('url'),
                                text: '<div>\
                                        <img src="' + $(item).data('img') + '" />\
                                        <span class="item-name">' + $(item).data('name') + '</span>\
                                        <span class="item-price">' + $(item).data('price') + '</span>\
                                        </div>'
                            }
                        });
                        if ($(data).find('#product-list ul li').length > 5) {
                            items[items.length] = {
                                label: '' + query,
                                value: '' + query,
                                url: shop_search_url + '?query=' + encodeURIComponent(query),
                                text: 'Показать все'
                            }
                        }
                        response(items);
                    }
                });
            },
            select: function (event, ui) {
                location.href = ui.item.url;
            }
        }).data("autocomplete")._renderMenu = function (ul, items) {
            $.each(items, function (index, item) {
                $('<li></li>')
                        .data('item.autocomplete', item)
                        .append('<a href="' + item.url + '">' + item.text + '</a>')
                        .appendTo(ul);
            });
        };
    });
});

function initFormControl() {
    $('input[type="text"],input[type="search"],input[type="password"],input[type="checkbox"],textarea, select').addClass('form-control');
    $('input[type="submit"], input[type="button"], button:not(.btn-default)').addClass('button btn');
}

function deletedopclass(list) {
    list.removeClass('green').removeClass('red').removeClass('grey');
    return false;
}
function punsh_utdate(now_int, new_int, list) {
    now_int = parseFloat(now_int);
    new_int = parseFloat(new_int);
    if (new_int > now_int) {
        var color = 'green';
    } else if (new_int < now_int) {
        var color = 'red';
    } else {
        var color = 'grey';
    }
    var list = $('#panel .' + list);
    list.addClass(color);
    setTimeout(deletedopclass, 1000, list);
    return false;
}