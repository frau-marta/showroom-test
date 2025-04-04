$(document).ready(function () {
    $('.footer-menu__list .top a').on('click',function () {
        $(this).toggleClass('open');
        $(this).siblings('ul').toggle('slow');
        return false;
    });
    $('#menu_open').on('click',function () {
        $(this).toggleClass('open');
        $('.header-links').toggle('slow');
        return false;
    });
});