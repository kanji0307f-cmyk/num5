
function calculate() {
    let product = document.getElementById("product");
    let quantity = document.getElementById("quantity").value;
    let result = document.getElementById("result");

    let price = Number(product.value);
    quantity = Number(quantity);

    if (quantity <= 0 || !Number.isInteger(quantity)) {
        result.innerHTML = "Введите правильное количество!";
    } else {
        let total = price * quantity;

        result.innerHTML =
            "Товар: " + product.options[product.selectedIndex].text +
            "<br>Количество: " + quantity +
            "<br>Итого: " + total + " руб.";
    }
}
