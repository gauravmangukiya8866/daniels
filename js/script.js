
$(document).ready(function () {

    $('#1').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        center: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

})
$(document).ready(function () {

    $('#2').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        center: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 2000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })

    $('.close').hide();

    $('.menu_icon').click(function () {

        $('.open').toggle();
        $('.close').toggle();
        $('.heading_theme').toggle();

    });


    
});


function form() {
    var n = document.getElementById('name_1').value;
    var e = document.getElementById('email_2').value;
    var a = document.getElementById('add').value;
    // var p = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

    if (n == "") {
        alert('plz enter name');
        return false;
    }
    if (a == "") {
        alert('plz enter valid Add...');
        return false;
    }
};

$(window).scroll(function () {
    var sticky = $('.nav_bg'),
        scroll = $(window).scrollTop();

    if (scroll >= 550) sticky.addClass('fixed');
    else sticky.removeClass('fixed');

    if (scroll >= 550) {
        $('.nav_bg').css({ "background-color": "#1c1c1c" });
    }
    else
    {
        $('.nav_bg').css({ "background-color": "transparent" });

    }
    
});

$(document).ready(function(){

    $(window).on('scroll',function(){

       var s = $(window).scrollTop()
        // console.log(s);

        if(s >= 300)
        {
            $('#scroll_top').css("opacity","1")
        }
        else
        {
            $('#scroll_top').css("opacity","0")
        }

        $('#scroll_top').click(function(){
            
            $(window).scrollTop({top:0})

        })

    })


})

$(document).ready(function(){

    $()

});
