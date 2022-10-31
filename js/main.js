document.addEventListener('DOMContentLoaded', () => {
    // range
    const sumInput = document.querySelector('.form__input--range');

    function range(input, progress, content) {
        const input$ = document.querySelector(input);
        const progress$ = document.querySelector(progress);
        if (input$) {
            const val = input$.value;
            const min = input$.getAttribute('min');
            const max = input$.getAttribute('max');
            const step = input$.getAttribute('step');
            const position = 100 / (max - step) * (val - step);
            updateRangePosition(progress$, position);

            input$.addEventListener('input', () => {
                const val = input$.value;
                const min = input$.getAttribute('min');
                const max = input$.getAttribute('max');
                const step = input$.getAttribute('step');
                const position = 100 / (max - step) * (val - step);
                updateRangePosition(progress$, position);
                content.value = prettify(val);
            });
        }
    }

    function updateRangePosition(progress$, position) {
        if (progress$) {
            progress$.style.width = `${position}%`;
        }
    }

    // маска
    function prettify(num) {
        var n = num.toString();
        return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');
    }

    range('.range__input', '.range__track', sumInput);

    // range


    const btnGeneral = document.querySelector('.detail__btn'),
        btnMain = document.querySelector('.detail__main'),
        btnClose = document.querySelector('.detail__btn--close');

    btnGeneral.onclick = function () {
        btnGeneral.classList.add('detail__btn--active');
        btnMain.classList.add('detail__main--active');
    };

    btnClose.onclick = function () {
        btnGeneral.classList.remove('detail__btn--active');
        btnMain.classList.remove('detail__main--active');
    };


    const swiper = new Swiper('.swiper-sert', {
        loop: true,
        resizeObserver: false,
        spaceBetween: 20,
        slidesPerView: 1.6,

        pagination: {
            el: '.swiper-pagination',
        },

        navigation: {
            nextEl: '.next',
            prevEl: '.prev',
        },
    });

});

