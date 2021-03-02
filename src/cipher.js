'use strict'

const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m',
'n','o','p','q','r','s','t','u','v','w','x','y','z'];

const ALPHABETKEY = {
    "a" : 0,
    "b" : 1,
}

let submit = document.getElementById("caesarCipher");
submit.addEventListener('click', function(){
    caesarCipher()
});


let submitVig = document.getElementById("vigCipher");
submitVig.addEventListener('click', function(){
    vigenereCipher()
});

function caesarCipher(){
    let plaintext = document.getElementById("plaintext").value;
    plaintext = plaintext.toLowerCase(); //make all letters lower case
    plaintext = plaintext.split(''); //split into array
    let ciphertextContainer = document.getElementById("ciphertext");
    let ciphertext = []; 
    let key = 3; 

    for (let i = 0; i < plaintext.length; i++) {
        for (let y = 0; y < alphabet.length; y++) {
            if(plaintext[i] == alphabet[y]){
                ciphertext.push(alphabet[y + key]);
            }            
        }        
    }

    ciphertextContainer.innerHTML = "Ciphertext: " + ciphertext.join(''); //join to remove commas
}

function vigenereCipher(){
    let plaintext = document.getElementById("plaintextVig").value;
    plaintext = plaintext.toLowerCase();
    plaintext = plaintext.split('');
    let key = document.getElementById("key").value;
    key = key.toLowerCase();
    key = key.split('');
    let keyNo = [];
    let ciphertext = [];
   
    for (let i = 0; i < key.length; i++) { //changing our key to numbers
        for (let y = 0; y < alphabet.length; y++) {
            if(key[i] == alphabet[y]){
                keyNo.push(y); //pushing numbers into array
            }            
        }        
    }

    let keyIndex = 0; 

    //Iteration through plaintext
    for (let a = 0; a < plaintext.length; a++) {
        
        for (let y = 0; y < alphabet.length; y++) { //iterate through alphabet
            if (plaintext[a] == alphabet[y]){ //when letter matches alphabet
                let cipherIndex = y + keyNo[keyIndex]; 
                if(cipherIndex > (alphabet.length-1)){
                    cipherIndex = Math.abs(alphabet.length - cipherIndex); //make sure it's positive
                }
                ciphertext.push(alphabet[cipherIndex]); //push into ciphertext
                keyIndex++;
                if(keyIndex == keyNo.length){ //"restart" key
                    keyIndex = 0;
                }
            }               
        }
    }

    let ciphertextContainer = document.getElementById("ciphertextVig");
    ciphertextContainer.innerHTML = "Ciphertext: " + ciphertext.join('');

}