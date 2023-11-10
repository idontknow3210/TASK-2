function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    let translationPercent = (percent/100)/12;
    let bodyCredit =  amount - contribution;
    let monthPay = bodyCredit * (translationPercent + (translationPercent / (( Math.pow((1 + translationPercent), countMonths)) - 1)));
    let result = monthPay*countMonths;
    return +result.toFixed(2);
}