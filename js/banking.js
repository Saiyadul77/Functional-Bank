function valueInput(type) {
    const valueTitle = document.getElementById(type);
    const valueAmount = valueTitle.value;
    const newValueConvert = parseFloat(valueAmount);
    valueTitle.value = '';
    return newValueConvert;
}
function valuePass(inputId, newValueConvert) {
    const valueStatus = document.getElementById(inputId);
    const valueUpdate = valueStatus.innerText;
    const valueUpdateConvert = parseFloat(valueUpdate);
    const valueTotal = valueUpdateConvert + newValueConvert;
    valueStatus.innerText = valueTotal;
}
function startingValue() {
    const startingAmount = document.getElementById('balance-total');
    const startingAmountStatus = startingAmount.innerText;
    const startingAmountConvert = parseFloat(startingAmountStatus);
    return startingAmountConvert;
}
function startingValueUpdate(newValueConvert, isAdd) {
    const startingAmount = document.getElementById('balance-total');
    const startingAmountConvert = startingValue();
    if (isAdd == true) {
        startingAmount.innerText = startingAmountConvert + newValueConvert;
    }
    else {
        startingAmount.innerText = startingAmountConvert - newValueConvert;
    }
}
//deposit 
document.getElementById('deposit-button').addEventListener('click', function () {
    const newValueConvert = valueInput('deposit-input')
    if (newValueConvert > 0 && true) {
        valuePass('deposit-total', newValueConvert);
        startingValueUpdate(newValueConvert, true);
    }
})

// withdraw
document.getElementById('withdraw-button').addEventListener('click', function () {
    const newValueConvert = valueInput('withdraw-input');
    const startingAmountConvert = startingValue()
    if (newValueConvert > 0 && newValueConvert < startingAmountConvert) {
        valuePass('withdraw-total', newValueConvert);
        startingValueUpdate(newValueConvert, false);
    }

})