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
                $(this).toggleClass('active-tab');
                if(_tab.hasClass('active-tab')){
                    $(this).find('img').attr('src', $(this).find('img').data('active'));
                    console.log($(this));
                }
                else{
                    _tab.find('img').attr('src', _tab.find('img').data('inactive'));
                }
                $('.tab-body').removeClass('active-tab-body');
                $(tabBodyId).toggleClass('active-tab-body');

            });
            console.log(tabBodyId);

        });


    });
});