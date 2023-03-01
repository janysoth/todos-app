function introMessage(){
    let userInput = document.querySelector("#userInput");
    let message = document.querySelector("#message"); 

    message.innerHTML = message.innerHTML + `Welcome to my page, ${userInput.value}.<br/>`;
    
}

