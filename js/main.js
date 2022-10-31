document.addEventListener('DOMContentLoaded', () => {

    // range
    const sumInput = document.querySelector('.form__input--range'),
        rangeInputSum = document.querySelector('.range__input'),
        rangeTrackSum = document.querySelector('.range__track');

    // const minSum = rangeInputSum.getAttribute('min');
    // const maxSum = rangeInputSum.getAttribute('max');
    // const stepSum = rangeInputSum.getAttribute('step');

    // маска
    function prettify(num) {
        const n = num.toString();
        return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');
    }

    function range(input$, progress$, content) {
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

    range(rangeInputSum, rangeTrackSum, sumInput);


    sumInput.addEventListener('input', function () {

        const minSum = rangeInputSum.getAttribute('min');
        const maxSum = rangeInputSum.getAttribute('max');
        const stepSum = rangeInputSum.getAttribute('step');

        this.value = prettify(this.value.replace(/\D/g, ''))
        if (+this.value.replace(/\D/g, '') > +maxSum) {
            this.value = prettify(maxSum)
            return
        }
        if (+this.value.replace(/\D/g, '') < +minSum) {
            rangeInputSum.value = 0
            rangeTrackSum.style.width = 0 + '%'
            return
        }
        if (+this.value.replace(/\D/g, '') >= +minSum && +this.value.replace(/\D/g, '') <= +maxSum) {
            rangeTrackSum.style.width = `${100 / (maxSum - stepSum) * (this.value.replace(/\D/g, '') - stepSum)}%`;
            rangeInputSum.value = this.value.replace(/\D/g, '')
        }
    })


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

