// handle deposit button event 
document.getElementById('deposit-btn').addEventListener('click', function() {
    // get the amount deposit
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
    // Update deposit total
    const depositTotal = document.getElementById('depositTotal')
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;
    // clear the deposit input field
    depositInput.value = '';
    // Update account Balance
    const balanceTotal = document.getElementById('balanceTotal');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;

});
// handle withdraw button handler
document.getElementById('withdraw-btn').addEventListener('click', function() {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    // set withdraw total 
    const withdrawTotal = document.getElementById('withdrawTotal');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;
    // Update balance
    const balanceTotal = document.getElementById('balanceTotal');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;
    // clear the withdraw input
    withdrawInput.value = '';
});