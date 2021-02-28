
$(function(){
    
    // script for mobile menu

    $('.mobile_btn').on('click',function(evt){
        $('.wrap_mobile_menu').on('click', function(evt){
            evt.stopPropagation();
        });
        evt.stopPropagation();
        $('.wrap_mobile_menu').toggleClass('wrap_mobile_menu--active');
    });

    $('body').click(function(){
        $('.wrap_mobile_menu').removeClass('wrap_mobile_menu--active');
    });


    //script for block features

    let listFeaturesTitle = $('.accordion_btn_item');
    $(listFeaturesTitle).on('click', function(){
        if(!$(this).hasClass('accordion_btn_item--active')){
            $(this).addClass('accordion_btn_item--active');
            $(listFeaturesTitle).not(this).removeClass('accordion_btn_item--active');
            $(this).next().slideDown(200);
            $(listFeaturesTitle).not(this).next().slideUp(200);
        }else{
            $(this).removeClass('accordion_btn_item--active');
            $(this).next().slideUp(200);
        }

    });

    // script for tabs contacts

    $('.contact_links_btn').on('click', function(){
        $(this).siblings().removeClass('contact_links_btn--active');
        $(this).addClass('contact_links_btn--active');
        $('.contact_address_content_item').hide().eq($(this).index()).addClass('contact_address_content_item--active').fadeIn(300);
    });

    // script modal block
    let modalOpen = $('.modal_open');
    let modalPage = $('.modal_page');
    let modal = $('.modal');
    $(modalOpen).on('click', function(evt){
        evt.preventDefault();
        $(modalPage).addClass('modal_page--active');
        $('body').addClass('body--active')
        $(modal).click(function(evt){
            evt.stopPropagation();
        })
    });

    $(modalPage).on('click', function(){
        $(this).removeClass('modal_page--active');
        $('body').removeClass('body--active')
    });

    // script btn scroll to top 

    let btnScrollTop = $('.btn_scroll_top');
    $(window).on('scroll', function(){
        if($(this).scrollTop() >= 700){
            $(btnScrollTop).addClass('btn_scroll--active');
        }else{
            $(btnScrollTop).removeClass('btn_scroll--active');
        }
    });
    
    $(btnScrollTop).on('click', function(){
        $("html").animate({
            scrollTop : 0
        }, 1000);
    }); 


    // script anchor more slowly

    $('a[href^="#anchor"]').on('click', function(evt){
        evt.preventDefault();
        let anchorLink = $(this).attr('href');
        $('html, body').animate({
            scrollTop : $(anchorLink).offset().top
        }, 1000)
    })
});

