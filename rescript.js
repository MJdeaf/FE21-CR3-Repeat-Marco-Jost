const calculateInvoice = () => {
    var starterPrice = 5.99;
    var maindishPrice = 12.99;
    var dessertPrice = 4.99;
    var beveragePrice = 2.50;
    return starterPrice + maindishPrice + dessertPrice + beveragePrice
}

console.log("your invoice is " + calculateInvoice())