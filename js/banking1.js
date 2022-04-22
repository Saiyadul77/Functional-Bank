document.getElementById('deposit-button').addEventListener('click', function () {
    // deposit input and capture
    const deposit = document.getElementById('deposit-input');
    const depositAmount = deposit.value;
    const newDeposit = parseFloat(depositAmount);
    // deposit update
    const depositUpdate = document.getElementById('deposit-total');
    const depositAmountText = depositUpdate.innerText;
    const previousDeposit = parseFloat(depositAmountText);
    const depositBalance = previousDeposit + newDeposit;
    depositUpdate.innerText = depositBalance;
    // clear input field
    deposit.value = '';

    // Total balance update
    const balanceTotal = document.getElementById('balance-total');
    const balanceAmount = balanceTotal.innerText;
    const balanceConvert = parseFloat(balanceAmount);
    const balanceUpdate = balanceConvert + newDeposit;
    balanceTotal.innerText = balanceUpdate;

})
// withdraw
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdraw = document.getElementById('withdraw-input');
    const withdrawAmount = withdraw.value;
    const newWithdraw = parseFloat(withdrawAmount);

    // input withdraw
    const withdrawStatus = document.getElementById('withdraw-total');
    const withdrawBalance = withdrawStatus.innerText;
    const previousWithdraw = parseFloat(withdrawBalance);
    const withdrawTotal = newWithdraw + previousWithdraw;
    withdrawStatus.innerText = withdrawTotal;
    withdraw.value = '';

    //update total balance using withdraw
    const balanceTotal = document.getElementById('balance-total');
    const balanceAmount = balanceTotal.innerText;
    const balanceConvert = parseFloat(balanceAmount);
    const balanceUpdate = balanceConvert - newWithdraw;
    balanceTotal.innerText = balanceUpdate;


})