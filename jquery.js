function moremenu() {    
    var max_elem = 4; // show only 4 item/li then show more
    var items = jQuery('.site-header-menu .main-navigation > div > ul > li'); // menu li selection
    var surplus = items.slice(max_elem, items.length);
    surplus.wrapAll('<li class="more_menu menu-item-flyout tttoplink mega-menu-item"><ul class="top-link sub-menu clearfix">'); // your li markup with extra class
    jQuery('.more_menu').prepend('<a href="#" class="level-top mega-menu-link">More</a>'); // Add More option with # link
    jQuery('.more_menu').mouseover(function(){
        jQuery(this).children('ul').addClass('shown-link');
    })
    jQuery('.more_menu').mouseout(function(){
        jQuery(this).children('ul').removeClass('shown-link');
    });
}

// Run script
jQuery(document).ready(function(){
    moremenu();
});
