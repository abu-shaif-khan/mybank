document.getElementById('btn-deposit').addEventListener('click', function(){
    let depositInput = document.getElementById('input-deposit');
    let deposit = parseFloat(depositInput.value);

    let balanceField = document.getElementById('balance-money');
    let balance = parseFloat(balanceField.innerText);
    if(isNaN(deposit)){
        alert("Please put a number");
        return;
    }
    
    let depositDisplay = document.getElementById('deposit-money');
    let preDeposit = parseFloat(depositDisplay.innerText);

    depositDisplay.innerText = deposit + preDeposit;
    balanceField.innerText = balance + deposit;

    depositInput.value ='';

});

document.getElementById('btn-withdraw').addEventListener('click', function(){
    let withdrawInput = document.getElementById('input-withdraw');
    let withdraw = parseFloat(withdrawInput.value);

    let balanceField = document.getElementById('balance-money');
    let balance = parseFloat(balanceField.innerText);
    if(isNaN(withdraw)){
        alert("Please put a number");
        return;
    }
    let withdrawDisplay = document.getElementById('withdraw-money');
    let preWithdraw = parseFloat(withdrawDisplay.innerText);
    
    withdrawInput.value ='';

    if(withdraw > balance){
        alert("you do not have enough money");
        return;
    }

    withdrawDisplay.innerText = withdraw + preWithdraw;
    balanceField.innerText = balance - withdraw;


});