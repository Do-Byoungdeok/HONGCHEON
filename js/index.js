$(function(){
    //스크롤 header
    $(document).on('scroll', function(){
        if($(window).scrollTop() > 500){
            $("#header").addClass("headerActive");
        }else{
            $("#header").removeClass("headerActive");
        }
    })


    //슬라이드
    var slider = $(".banner"),
        firstSlide = slider.find('li').first()
        .stop(true).animate({'opacity':1},200);

    function PrevSlide(){
        stopSlide();
        startSlide();

        var lastSlide = slider.find('li').last()
        .prependTo(slider);

        secondSlide = slider.find('li').eq(1)
        .stop(true).animate({'opacity':0},400);

        firstSlide = slider.find('li').first()
        .stop(true).animate({'opacity':1},400);
    }
    function NextSlide(){
        stopSlide();
        startSlide();
        firstSlide = slider.find('li').first()
        .appendTo(slider);
        
        var lastSlide = slider.find('li').last()
        .stop(true).animate({'opacity':0},400);
        
        firstSlide = slider.find('li').first()
        .stop(true).animate({'opacity':1},400);
    }

    $(".arrowNext").on("click", function(){
        NextSlide();
    });
    $(".arrowPrev").on("click", function(){
        PrevSlide();
    });

    startSlide();

    var theInterval;

    function startSlide(){
        theInterval = setInterval(NextSlide, 5000);
    }

    function stopSlide(){
        clearInterval(theInterval);
    }

    $('.banner').hover(function(){
        stopSlide();
    }, function(){
        startSlide();
    })



    //메뉴
    $(".hamBtn").on("click", function(){
        if($(this).hasClass("active")){
            $("nav").css("right", "-300px");
        }
        else{
            $("nav").css("right",0);
        }
        $(this).toggleClass("active");
    })














})


