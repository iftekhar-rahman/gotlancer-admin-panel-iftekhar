jQuery(document).ready(function($){

   

    // nice select
    $('select').niceSelect();
    
    // perfectScrollbar
    $(".nice-select .list").perfectScrollbar();

    $(".menu-trigger").on("click", function(){
        $(".menu-trigger, .offcanvas-menu").toggleClass("active");
    });

    $(".main-menu-trigger").on("click", function(){
        $(".main-menu-trigger, .mainmenu").toggleClass("active");
    });

    if ($(window).width() < 991) {
        /*-----------------------
        --> Off Canvas Menu
        -------------------------*/
        /*Variables*/
        var $offCanvasNav = $('.off-canvas-nav'),
            $offCanvasNavSubMenu = $offCanvasNav.find('.sub-menu');

        /*Add Toggle Button With Off Canvas Sub Menu*/
        $offCanvasNavSubMenu.parent().prepend('<span class="menu-expand"><i class="fas fa-chevron-down"></i></span>');

        /*Close Off Canvas Sub Menu*/
        $offCanvasNavSubMenu.slideUp('0');

        /*Category Sub Menu Toggle*/
        $offCanvasNav.on('click', 'li a, li .menu-expand', function(e) {
            var $this = $(this);
            if (($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('menu-expand'))) {
                e.preventDefault();
                if ($this.siblings('ul:visible').length) {
                    $this.parent('li').removeClass('active');
                    $this.siblings('ul').slideUp('0');
                } else {
                    $this.parent('li').addClass('active');
                    $this.closest('li').siblings('li').find('ul:visible').slideUp('0');
                    $this.siblings('ul').slideDown('0');
                }
            }
        });

    }
    else {
    }

   // Scroll To Top starts
   $(window).scroll(function(){
        if ($(this).scrollTop() > 500) {
            $('.scrollTop').addClass('scrollBtn');
        } else {
            $('.scrollTop').removeClass('scrollBtn');
        }
    });
    $(".scrollTop").click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    }); // click() scroll top ENDS
   





    

    

});