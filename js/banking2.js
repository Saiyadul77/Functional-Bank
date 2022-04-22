function inputItem(items) {
    const item = document.getElementById(items);
    const itemInput = item.value;
    const newItemToConvert = parseFloat(itemInput);
    item.value = '';
    return newItemToConvert;
}
function updateItem(items, newItemToConvert) {
    const itemValue = document.getElementById(items);
    const itemValueToConvert = itemValue.innerText;
    const previousValue = parseFloat(itemValueToConvert);
    const itemValueTotal = previousValue + newItemToConvert;
    itemValue.innerText = itemValueTotal;
}
function updateItemValue() {
    const update = document.getElementById('balance-total');
    const updateStatus = update.innerText
    const updateAmount = parseFloat(updateStatus);
    return updateAmount;
}
function updateTotalAmount(newItemToConvert, isAdd) {
    const update = document.getElementById('balance-total');
    const updateAmount = updateItemValue();
    if (isAdd == true) {
        update.innerText = updateAmount + newItemToConvert;
    }
    else {
        update.innerText = updateAmount - newItemToConvert;
    }
}

document.getElementById('deposit-button').addEventListener('click', function () {
    const newItemToConvert = inputItem('deposit-input');
    if (newItemToConvert > 0) {
        updateItem('deposit-total', newItemToConvert);
        updateTotalAmount(newItemToConvert, true);
    }

})

// withdraaw
document.getElementById('withdraw-button').addEventListener('click', function () {
    const newItemToConvert = inputItem('withdraw-input');
    const element = updateItemValue();
    if (newItemToConvert > 0 && newItemToConvert < element) {
        updateItem('withdraw-total', newItemToConvert);
        updateTotalAmount(newItemToConvert, false);
    }
    if (newItemToConvert > element) {
        console.log('You have no sufficient balance. please deposit amount');
    }


    /* const withdraaw = document.getElementById('withdraw-total');
    const previousWithdraw = withdraaw.innerText;
    const withdraawValue = parseFloat(previousWithdraw);
    const withdraawTotal = withdraawValue + newItemToConvert;
    withdraaw.innerText = withdraawTotal; */
})