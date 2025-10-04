(function () {
    "use strict";

    if (document.querySelectorAll('[data-swiper="song-slider"]').length) {
        const options = {
            centeredSlides: false,
            loop: true,
            slidesPerView: 6,
            spaceBetween: 20,
            navigation: {
                clickable: true,
                nextEl: '#next',
                prevEl: '#prev',
            },
            breakpoints: {
                0: { slidesPerView: 1 },
                320: { slidesPerView: 2 },
                767: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
                1400: { slidesPerView: 6},
                1500: { slidesPerView: 6}
            },
        }
        let swiper = new Swiper('[data-swiper="song-slider"]', options);
        document.addEventListener('theme_scheme_direction', (e) => {
            swiper.destroy(true, true)
            setTimeout(() => {
                swiper = new Swiper('[data-swiper="song-slider"]', options);
            }, 500);
        })
    }
    if (document.querySelectorAll('[data-swiper="geners-slider"]').length) {
        const options = {
            centeredSlides: false,
            loop: true,
            slidesPerView: 5,
            spaceBetween: 20,
            navigation: {
                clickable: true,
                nextEl: '#next1',
                prevEl: '#prev1',
            },
            breakpoints: {
                0: { slidesPerView: 1 },
                320: { slidesPerView: 2 },
                767: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
                1400: { slidesPerView: 5},
                1500: { slidesPerView: 5}
            },
        }
        let swiper = new Swiper('[data-swiper="geners-slider"]', options);
        document.addEventListener('theme_scheme_direction', (e) => {
            swiper.destroy(true, true)
            setTimeout(() => {
                swiper = new Swiper('[data-swiper="geners-slider"]', options);
            }, 500);
        })
    }
    if (document.querySelectorAll('[data-swiper="artists-slider"]').length) {
        const options = {
            centeredSlides: false,
            loop: true,
            slidesPerView: 5,
            spaceBetween: 20,
            navigation: {
                clickable: true,
                nextEl: '#next1',
                prevEl: '#prev1',
            },
            breakpoints: {
                0: { slidesPerView: 1 },
                320: { slidesPerView: 2 },
                767: { slidesPerView: 3 },
                1024: { slidesPerView: 5 },
                1400: { slidesPerView: 7},
                1500: { slidesPerView: 7}
            },
        }
        let swiper = new Swiper('[data-swiper="artists-slider"]', options);
        document.addEventListener('theme_scheme_direction', (e) => {
            swiper.destroy(true, true)
            setTimeout(() => {
                swiper = new Swiper('[data-swiper="artists-slider"]', options);
            }, 500);
        })
    }
})(jQuery);