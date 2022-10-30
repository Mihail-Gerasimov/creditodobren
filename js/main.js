document.addEventListener('DOMContentLoaded', () => {

    const rangeInput = document.querySelector(".range__input"),
        rangeTrack = document.querySelector(".range__track"),
        rangeNum = document.querySelector(".range-num");

    rangeInput.addEventListener('input', function () {
        let val = +this.value,
            min = +this.getAttribute('min'),
            max = +this.getAttribute('max'),
            step = +this.getAttribute('step'),
            position = 100 / (max - step) * (val - step);

        rangeTrack.style.width = `${position}%`;


        function fun1() {
            var rng = document.getElementById('r1'); //rng - это ползунок
            var i1 = document.getElementById('i1'); // i1 - input
            i1.value = rng.value;
        }

        fun1();

    });



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

