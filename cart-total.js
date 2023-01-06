function calculate(totalPrice, baskAmount, promoCode) {
    let finalPrice = totalPrice;
    if (promoCode === 'ДАРИМ300' && totalPrice <= 300) {
        finalPrice = 0;
        console.log()
    } else if (promoCode === 'ДАРИМ300') {
        finalPrice -= 300;
        console.log('Промокод ДАРИМ300 применён, стоимость корзины', finalPrice);
    }
    if (baskAmount >= 10) {
        finalPrice *= .95;
        console.log('Количество товаров в корзине >=10, скидка 5%', finalPrice);
    } 
    if (finalPrice > 50000) {
        let priceSurplus = finalPrice - 50000;
        finalPrice = 50000 + priceSurplus * .2;
        console.log('Сумма корзины > 50000, скидка 20% от суммы превышения', finalPrice);
    }
    if (promoCode === 'СКИДКА15' && finalPrice >= 20000) {
        finalPrice *= .85;
        finalPrice.toFixed();
        console.log(finalPrice);
    }
    return finalPrice;
}

console.log(calculate(54000, 10, 'ДАРИМ300'));