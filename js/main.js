document.getElementById('btn-sub').addEventListener('click', function(){
    let emailField = document.getElementById('input-email');
    let email = emailField.value;
    
    let passwordField = document.getElementById('input-password');
    let password = passwordField.value;
    

    if (email === 'bap@email.com' && password === 'sj'){
        window.location.href = 'bankgo.html';
    }
    else{
        alert('invalid user');
    }
    
});