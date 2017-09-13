$(document).ready(function () {

    $('.collapse-menu').on('click', function () {

        $(this).parent().toggleClass('collapsed-menu');
        $(this).find('i').toggleClass('fa-angle-down');
        $(this).next().toggleClass('d-flex fadeInUp');

    });

    $('.slider').slick({
        arrows: false,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 5000
    });


    /*
    * Tabs
    * */

    $(function () {


        var _tab = $('.tab');


        _tab.each(function () {

            var tabBodyId = $(this).data('tabBody');

            $(this).on('click',function () {


                _tab.removeClass('active-tab');
                _tab.find('img:nth-child(2)').addClass('out');
                _tab.find('img:nth-child(1)').removeClass('out');
                $(this).toggleClass('active-tab');
                if(_tab.hasClass('active-tab')){

                    $(this).find('img:first-child').addClass('out');
                    $(this).find('img:nth-child(2)').removeClass('out');
                    console.log($(this));
                }
                else{

                }
                $('.tab-body').removeClass('active-tab-body');
                $(tabBodyId).toggleClass('active-tab-body');

            });
            console.log(tabBodyId);

        });


    });
});