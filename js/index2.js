$(function(){

    //nav - side
    $('.btn_nav').on('click',function(){
        if( $('nav.side').hasClass('on') === false ){
            $('nav.side').addClass('on');
        }
    });

    $('nav.side .btn_close').on('click',function(){
        $('nav.side').removeClass('on');
    });

    //footer
    $('footer').before('<div class="footer_height"></div>');
    $('.footer_height').css('height',$('footer').outerHeight());

    
    
    // main skills progressbar
    if ( $('.progress-group').length ) { 
        var waypoint = new Waypoint({ element: $('.progress-group'),
            handler: function(direction) { animate_progress_bar(); }, offset: '100%' }); 
    } 

    

});

var tfAction = true;

// scroll
$(window).on('scroll',function(){

    //nav - side
    if( $(this).scrollTop() > 0 ){
        $('nav.gnb').addClass('on');
    }else{
        $('nav.gnb').removeClass('on');
    }

    //scroll indicator
    scrollIndicator();

    //probar
    if( $(this).scrollTop() > $('section').offset().top - $(window).outerHeight() + 200 ){
        if(tfAction == true){            
            scrollProBar(0, 78, 2); //eq, percent, duration
            scrollProBar(1, 56, 3); //eq, percent, duration
            tfAction = false;
        }
    }

    


});
$(window).resize(function () {

    //scroll indicator
    scrollIndicator();

});

// scroll indicator
function scrollIndicator() {
    if ($('.scroll_indicator').length) {
        var articleHeight = $('.footer_height').offset().top - $('section').offset().top - window.innerHeight;
        var articleStart = $(window).scrollTop() - $('section').offset().top;
        if (articleStart > 0 && $(window).scrollTop() > $('section').offset().top ) {
            var percentage = (articleStart / articleHeight) * 100;
            percentage = percentage > 100 ? 100 : percentage;
            $('.scroll_indicator span').css('width', Math.floor(percentage) + '%');
            $('.scroll_indicator').removeClass('hide');
        } else {
            $('.scroll_indicator span').css('width', '0%');
            $('.scroll_indicator').addClass('hide');
        }
    }
}

//move-ani    
function scrollGo(e){
    if( $(this).scrollTop() > e.offset().top - $(window).outerHeight() + 200 ){
        e.addClass('go');
    }else{
        e .removeClass('go');
    }
}

//probar
function proBar(i, k, $this){
    var memberCountConTxt = i;
    $this.find('.bar').width(memberCountConTxt + '%');
    $({ val : 0 }).animate({ val : memberCountConTxt }, {
        duration: k * 1000,
        step: function() {
        var num = numberWithCommas(Math.floor(this.val));
        // var num = numberWithCommas(this.val.toFixed(1)); //소숫점 자리수 표현 지정
        $this.find('.text').text(num).css('left', i + '%');
    },
    complete: function() {
        var num = numberWithCommas(Math.floor(this.val));
        $this.find('.text').text(num).css('left', i + '%');
        }
    });
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    $this.find('.bar, .text').css('transition-duration', k + 's');    
}

function scrollProBar(e, a, b){
    if( $(window).scrollTop() > $('.item_box').eq(e).offset().top - $(window).outerHeight() ){
        $('.item_box').eq(e).find('.probar_wrap').each(function(){
            $(this).append('<div class="percent"><div class="bar"></div><div class="text"></div></div>');
            proBar(a, b, $(this)); //percent, duration, this
        });
        return false;
    }
}

// main skills progressbar
function animate_progress_bar() { 
    $('.progress-group').each(function() { 
        var $percentage = $(this).data('percentage'); 
        var $beforeCount = ($(this).find('.text').text() == '') ? 0 : $(this).find('.text').text(); 
        $(this).addClass('active');
        $(this).find('.percent-text').each(function() { 
            var $this = $(this); 
            $({Counter: $beforeCount}).animate({Counter: $percentage}, { 
                duration: 2000,
                easing: 'swing',
                step: function() {
                    $this.text(Math.ceil(this.Counter));
                }
            });
        });
        $(this).find('.percent').stop().animate({left: $percentage + '%'}, 2000); 
        $(this).find('.progress-wrap .bar').stop().animate({width: $percentage + '%'}, 2000);
    }); 
}
