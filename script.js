
window.addEventListener("DOMContentLoaded", function() {

    let button = document.getElementById("calculate");

    button.addEventListener("click", function() {

        let quantity = document.getElementById("quantity").value;
        let product = document.getElementById("product").value;
        let result = document.getElementById("result");

        let pattern = /^\d+$/;

        if (quantity.match(pattern) === null || parseInt(quantity) <= 0) {
            result.textContent = "Ошибка! Введите правильное количество.";
            return;
        }

        let total = parseInt(product) * parseInt(quantity);

        result.textContent = "Стоимость заказа: " + total + " руб.";
    });

});
