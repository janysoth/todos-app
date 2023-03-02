function addMessage(){
    const userInput = document.querySelector("#userInput");
    const message = document.querySelector("#message"); 
    
    message.innerHTML = message.innerHTML + `Welcome to my page, ${userInput.value}.<br/>`;
}

function deleteMessage(){ 
    const userInput = document.querySelector("#userInput");
    const message = document.querySelector("#message");
    message.innerHTML = "";
}

