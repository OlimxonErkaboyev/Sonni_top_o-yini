let elForm = document.querySelector(".form");
let elInput = elForm.querySelector(".input");
let elPoints = document.querySelector(".points");
let elResult = document.querySelector(".result");
let elBtn = elForm.querySelector(".btn");


let randomNumber = Number(Math.round(Math.random() * 100));
let POINTS = 10;

elForm.addEventListener("submit", function (evt) {
    evt.preventDefault();

    let InputValue = elInput.value;
    POINTS --;
    elPoints.textContent = `${POINTS} ta urinish qoldi`;

    if (POINTS !== 0) {
        if (InputValue < randomNumber) {
            elResult.textContent = "Kattaroq son kiriting"
            elResult.classList.add('alert-danger');
        } else if (InputValue > randomNumber) {
            elResult.textContent = "Kichikroq son kiriting"
            elResult.classList.add('alert-danger');

        } else {
            elResult.textContent = "Topdingiz"
            elResult.classList.remove('alert-danger');
            elResult.classList.add('alert-success');
            elInput.disabled = true;
            elBtn.textContent = "Again";
            elBtn.addEventListener("click", function () {
                window.location.reload();
            });


        }
    }

    else {
        elInput.disabled = true;
        // elInput.setAttribute("disabled", true);
        elPoints.classList.add("alert-danger");
        elResult.textContent = "Urinishlar soni tugadi";
        elBtn.textContent = "Again";
        elBtn.addEventListener("click", function () {
            window.location.reload();
        });

    }

});