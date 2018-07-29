$(function () {
    //navegação
    $(".nav-menu-hover").hover(function () {
        $(this).prev().toggle();
    })

    $(".nav-menu-hover").prev().hover(function () {
        $(this).toggle();
    })

    //ver mais
    $(".ver-mais-btn").on("click", function () {
        $(this).next().toggle();
        if ($(this).next().is(":visible")) {
            $(this).text("Ver menos");
        }
        if ($(this).next().is(":hidden")) {
            $(this).text("Ver mais");
        }
    })

    //Adiciona scroll suave ao clicar nos links
    $('a[href*="#"]')
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 500, function () {
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) {
                            return false;
                        } else {
                            $target.attr('tabindex', '-1');
                            $target.focus();
                        };
                    });
                }
            }
        });
});
