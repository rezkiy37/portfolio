
$(function() {
    $("body").addClass('no-scroll');
    setTimeout(function() {
        $(".loadpage").css({
            background: "transparent"
        });
    }, 3000);
    setTimeout(function() {
       $("#loadlogo").css({
           opacity: "0"
       });
   }, 4300);
    setTimeout(function() {
        $("body").removeClass('no-scroll');
        $(".loadpage").css({
            display: "none"
        });
    }, 5001);
});

$( document ).ready(function() {

const logo = document.querySelectorAll("#loadlogo path");

for (let i = 0; i < logo.length; i++) {
    console.log(logo[i].getTotalLength());
}

    if ($(window).width() < 1025) {
        $(".nav__link").addClass('nav__link--mobile');
        $("#burger").css({
            display: "block"
        });
    }
    else {
        $("#burger").css({
            display: "none"
        });
    }


     $(window).resize(function() {
        if ($(window).width() > 1024) {
            $('.nav__link').removeClass('nav__link--mobile');
            $(".burger").css({
                display: "none"
            });
        }
        else {
            $(".nav__link").addClass('nav__link--mobile');
            $("#burger").css({
                display: "block"
            });
        }
     });

    if ($(window).width() < 601) {
        $("#intro-block").css({
            background: "#000 url(image/backgrounds/boat.jpg) no-repeat center center /cover"
        });
        $(".intro__photo").css({
            display: "none"
        });
        $(".intro__inner").removeAttr('style');
        $(".intro__inner").css({
            padding: "0 0 15px"
        });
    } else {}

    $(window).resize(function() {
        if ($(window).width() < 601) {
            $("#intro-block").css({
                background: "#000 url(image/backgrounds/boat.jpg) no-repeat center center /cover"
            });
            $(".intro__photo").css({
                display: "none"
            });
            $(".intro__inner").removeAttr('style');
            $(".intro__inner").css({
                padding: "0 0 15px"
            });
        } else {
            $("#intro-block").removeAttr('style');
            $(".intro__photo").css({
                display: "block"
            });
            $(".intro__inner").css({
                background: "url(image/backgrounds/intro-bg.png)"
            });
        }
    });

/* Burger Menu */
    let menuButton = $("#burger");
    let menuClose = $("#burgerClose");
    let navHeader = $(".header__nav");
    let navLink = $("[data-link]");

    menuClose.css({
        display: "none"
    });

    menuButton.on("click", function(Event) {
        event.preventDefault();

        menuButton.css({
            display: "none"
        });

        menuClose.css({
            display: "block"
        });

        setTimeout(function() {
            $(".used").css({
               transform: "rotate(45deg)"
            });
            $(".used").addClass("rotate")
        }, 100);

        setTimeout(function() {
            $(".used").removeAttr('style');
        }, 101);

        navHeader.addClass("nav__mobile");

        setTimeout(function() {
            navHeader.css({
                display: "flex",
                left: "0"
            });
        }, 300);


    navLink.on("click", function(event) {
    event.preventDefault();

        $(".used").removeClass("rotate");

        setTimeout(function() {
            menuClose.css({
            display: "none"
        });

        if ($(window).width() < 1025) {
            menuButton.css({
                display: "block"
            });
        } else {
            menuButton.css({
                display: "none"
            });
        }
        }, 70);


        setTimeout(function(){
           navHeader.css({
               left: "150%"
           });
        }, 300);

        setTimeout(function() {
            navHeader.css({
                display: "none"
            });
            navHeader.removeClass("nav__mobile");
        }, 700);

        setTimeout(function() {
            navHeader.removeAttr( 'style' );
        }, 701);
    });

    });

    menuClose.on("click", function(event) {
    event.preventDefault();

        $(".used").removeClass("rotate");

        setTimeout(function() {
            menuClose.css({
            display: "none"
        });

        menuButton.css({
            display: "block"
            });

            menuButton.prop("disabled", true);
        }, 10);

       setTimeout(function(){
           navHeader.css({
               left: "150%"
           });
        }, 300);

        setTimeout(function() {
            navHeader.css({
                display: "none"
            });
            navHeader.removeClass("nav__mobile");
            menuButton.prop("disabled", false);
        }, 700);

        setTimeout(function() {
            navHeader.removeAttr( 'style' );
        }, 701);


    });



/* Load Button */
    let loadButton = $("[data-load]");
    let hideButton = $("[data-hide]");
    let workline = $(".work__line");

    $(function() {


        $(".work__line:gt(-3)").addClass('hidden-scale');
        $(".work__line:gt(0)").removeClass('hidden-scale');
        $(".work__line:gt(0)").addClass('hidden-scale_left');
        workline.css({
            display: "none"
        });

        hideButton.css({
            display: "none"
        });

    });

    loadButton.on("click", function(event) {
        event.preventDefault();

        loadButton.css({
            display: "none"
        });

        workline.css({
            display: "flex"
        });

        setTimeout(function() {
            hideButton.css({
                display: "inline-block"
            });

            workline.css({
                left: "0",
            });
        }, 350);


        hideButton.on("click", function(event) {
            event.preventDefault();

            hideButton.css({
                display: "none"
            });

            setTimeout(function() {
                $(".work__line:gt(-3)").css({
                    left: "150%",
                });
                $(".work__line:gt(0)").css({
                    left: "-150%",
                });
            }, 300);

            setTimeout(function() {
                loadButton.css({
                    display: "inline-block"
                });

                workline.css({
                    display: "none"
                });
            }, 1000);

        });
    });

/* Load Posts */
    $(function() {

        let postsButton = $("[data-postsButton]");
        let hidePostsButton = $("[data-hidePostsButton]");
        let newsLine = $(".news__line");
        let newsHalf = $(".news__half");

        newsLine.css({
            display: "none"
        });
        hidePostsButton.css({
            display: "none"
        });

        $(".news__half:gt(-3)").addClass('hidden-scale_left');
        $(".news__half:gt(-2)").removeClass('hidden-scale_left');
        $(".news__half:gt(-2)").addClass('hidden-scale');

        postsButton.on("click", function(event) {
            event.preventDefault();

            postsButton.css({
                display: "none"
            });

            newsLine.css({
                display: "flex",
            });

            setTimeout(function() {
                newsHalf.css({
                    left: "0"
                });

                hidePostsButton.css({
                    display: "block"
                });
            }, 350);

            hidePostsButton.on("click", function(event) {
                event.preventDefault();

                hidePostsButton.css({
                    display: "none"
                });

                setTimeout(function() {
                    $(".news__half:gt(-3)").css({
                        left: "-150%"
                    })
                    $(".news__half:gt(-2)").css({
                        left: "150%"
                    })
                }, 350);

                setTimeout(function() {
                    newsLine.css({
                        display: "none",
                    });

                    postsButton.css({
                        display: "block"
                    });
                }, 700);
            });
        });
    });



/* Smooth Scroll */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementId = $(this).data("scroll");
        let elementOffset = $(elementId).offset().top;

        $("html, body").animate({
            scrollTop: elementOffset -90
        }, 700);
    });

/* Modals */

    /* Const */
    const modalCall = $("[data-modal]");
    const modalClose = $("[data-close]");

    /* Call */
    modalCall.on("click", function(event) {
        event.preventDefault();

        let $this = $(this);
        let modalId = $this.data('modal');

        $(modalId).addClass('open');
        $("body").addClass('no-scroll');

        setTimeout(function() {
            $(modalId).find(".modal__window").css({
                transform: "scale(1)"
            });
        }, 200);

        $('#worksSlider').slick('setPosition');
    });

    /* Close */
    modalClose.on("click", function(event) {
        event.preventDefault();

        let $this = $(this);
        let modalParent = $this.parents('.modal');

        modalParent.find(".modal__window").css({
                transform: "scale(0)"
            });

        setTimeout(function() {
            modalParent.removeClass('open');
            $("body").removeClass('no-scroll');
        }, 200);
    });

    /* Click on BG */
    $(".modal").on("click", function(event) {
        $(".modal").find(".modal__window").css({
                transform: "scale(0)"
        });

        setTimeout(function() {
            $(".modal").removeClass('open');
            $("body").removeClass('no-scroll');
        }, 200);
    });

    $(".modal__window").on("click", function(event) {
        event.stopPropagation();
    });


    /* Slider: https://kenwheeler.github.io/slick/ */
    $('[data-slider="slick"]').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        dots: true,
        arrows: false
    });




});
