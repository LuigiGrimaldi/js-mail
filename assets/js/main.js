// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

// Creo un array con le mail valide per accedere
 const emailEl = document.getElementById('email');
 const buttonEl = document.getElementById('button');
 const pEl = document.querySelector('p');
 const listaMail = [
    'mail1@mail.it',
    'mail2@mail.it',
    'mail3@mail.it',
    'mail4@mail.it',
    'mail5@mail.it',
    'mail6@mail.it',
    'mail7@mail.it',
]


buttonEl.addEventListener('click', function(){
    let hasAccess = false;
    for(let i = 0; i < listaMail.length; i++){
        if(listaMail[i] == emailEl.value){
            hasAccess = true;
        }
    }
    if(hasAccess){
        pEl.innerHTML = 'accesso eseguto'
    }else{
        pEl.innerHTML = 'accesso negato'

    }

})





