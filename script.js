const chatbox = document.getElementById("chat-box");
const chatinput = document.getElementById("chat-input");
//const sendbutton = document.getElementById("send-button");

const sendUser1Button = document.getElementById("send-user1");
const sendUser2Button = document.getElementById("send-user2");

function sendmessage(user){
    const messagetext = chatinput.value.trim();

    if(messagetext !==""){
        const message = document.createElement("div");
        message.className = `message ${user}`;
        message.textContent = messagetext;
        chatbox.appendChild(message);
        chatbox.scrollTop = chatbox.scrollHeight;
        chatinput.value = "";
    }
}

sendUser1Button.addEventListener("click", function() {
    sendmessage("user1");
});

sendUser2Button.addEventListener("click", function() {
    sendmessage("user2");
});


chatinput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendmessage("user1");
    }
});

