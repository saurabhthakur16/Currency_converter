function convertCurrency() {
    let amount = document.getElementById("amount").value;
    let from = document.getElementById("fromCurrency").value;
    let to = document.getElementById("toCurrency").value;

    if (amount === "") {
        document.getElementById("result").innerText = "Please enter amount!";
        return;
    }

    // Static exchange rates
    let rates = {
        "INR": 1,
        "USD": 0.012,
        "EUR": 0.011,
        "GBP": 0.0096
    };

    // Convert amount
    let result = (amount / rates[from]) * rates[to];

    document.getElementById("result").innerText =
        `${amount} ${from} = ${result.toFixed(2)} ${to}`;
}