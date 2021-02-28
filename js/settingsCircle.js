$(function(){
    let circleOne = $('.circle_box');
    let circleTwo = $('.circle_box-2');
    let circleThree = $('.circle_box-3');
    let circleFour = $('.circle_box-4');
    let innerHeightWindow = $(window).innerHeight() / 2;
    let coordinateCircle = $('.progress').offset().top - innerHeightWindow;

    $('.second.circle').circleProgress({
        value: 0,
        size: 150,
    });
    
    let initCircle = function(classCircle, counterValue, valueEnd){
        $(classCircle).circleProgress({
            value: valueEnd,
            size: 150,
            fill: {
              gradient: ["red", "orange"]
            },
            lineCap: "round",
            animation: {
              duration: 4000
            },
        }).on('circle-animation-progress', function(event, progress) {
            $(this).find('strong').html(Math.round(counterValue * progress));
        }); 
    };

    $(window).on('scroll', function circleStart(){
        if($(this).scrollTop() >= coordinateCircle){
            initCircle(circleOne, 1973, 0.8);
            initCircle(circleTwo, 1341, 0.65);
            initCircle(circleThree, 871, 0.4);
            initCircle(circleFour, 1252, 0.55);
            $(this).off('scroll', circleStart);
        }
     
    });
})


