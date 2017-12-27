jQuery(function ($) {
    $('.person-name').click(function () {
        $(this).siblings('.person-text--more').slideToggle();
    })
});
