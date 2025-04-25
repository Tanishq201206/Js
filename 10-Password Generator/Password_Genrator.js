document.querySelector('button').addEventListener("click", function(){
    const passLength = 12;
    let pass = "";

    for (let i = 0; i < passLength; i++) {
        let charValue = Math.floor(Math.random() * (126 - 32 + 1)) + 32; 
        let passCode = String.fromCharCode(charValue);
        pass += passCode;
    }

    let password = document.querySelector('.password h2')
    password.innerHTML = pass;
    password.style.color = "black";
})


document.querySelector('.password img').addEventListener('click', function(e){
    let password = document.querySelector('.password h2').innerText;
    
    const textarea = document.createElement('textarea');
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    
    alert("Password copied to clipboard!");
})