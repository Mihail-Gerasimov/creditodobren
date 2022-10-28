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
        // rangeNum.textContent = `${val}`;
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
});

