let message;

let word = "";
let wordList = [];

document.querySelector(".btn-encrypt").addEventListener("click", function () {
    message = document.getElementById("input_area").value;
    let codedMessage = document.querySelector("#coded__message").innerHTML = decoder_text(message);

    document.querySelector("#error_message").setAttribute("hidden", "hidden");
    document.querySelector(".text-decoder--main__out-img").setAttribute("hidden", "hidden");
    document.querySelector(".btn-copy").removeAttribute("hidden");
})

document.querySelector(".btn-decrypt").addEventListener("click", function(){
    message = document.getElementById("input_area").value;
    let codedMessage = document.querySelector("#coded__message").innerHTML = message;
    console.log(message);
});

document.querySelector(".btn-copy").addEventListener("click", function(){
    var backupMessage = document.getElementById("coded__message").innerHTML;
    alert("texto enviado para area de transferencia \n" + backupMessage);
});

// reset web page to original without using the refresh button
document.querySelector(".btn-copy").addEventListener("click", function(){
    document.getElementById("input_area").value = "";
    document.getElementById("coded__message").innerHTML = "Nenhuma mensagem encontrada";
    document.querySelector(".btn-copy").setAttribute("hidden", "hidden");
    document.querySelector("#error_message").removeAttribute("hidden");
    document.querySelector(".text-decoder--main__out-img").removeAttribute("hidden");
});

document.querySelector(".btn-decrypt").addEventListener("click", function(){
    descripted(message);
});

// A function that takes a string as an argument and returns a decoded version of the string.
function decoder_text(text){
    let letters = ''
    for (let letter of text){
        if(letter == 'e'){
            letter = 'enter';
        }
        else if(letter == 'i'){
            letter = 'imes';
        }
        else if(letter == 'a'){
            letter = 'ai';
        }
        else if(letter == 'o'){
            letter = 'ober';
        }
        else if(letter == 'u'){
            letter = 'ufat';
        }
        else if(letter == ' '){
            letter = ' ';
        }
        letters += letter
    }
    return letters
};
