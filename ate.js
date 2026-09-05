const messages = [
    "I don't really know how to say this, but I kinda admire you. 🐱❤️",

    "You're actually really cute, alam mo ba yun maam ko? 😭💗",

    "I like the way you are. You don't have to do anything special. 🫶",

    "Sometimes I just catch myself smiling when I see you. 😭",

    "There's just something about you that I can't really explain. 🐱💖",

    "I don't wanna make this awkward HAHAHA, I just wanted you to know. 😭",

    "You're someone I genuinely enjoy talking. Even the random conversations. 💗",

    "I think you're pretty special, even if I don't say it much. 🫶🏻",

    "Okay, last one... I just really admire you. That's it. No pressure. ❤️🐱"
];
let messageIndex = 0;

function showMessage(heart) {

    heart.classList.remove("clicked");

    void heart.offsetWidth;

    heart.classList.add("clicked");

    const messageBox = document.getElementById("message");

    messageBox.style.opacity = "0";

    setTimeout(() => {

        messageBox.textContent =
            messages[messageIndex];

        messageBox.style.opacity = "1";

        messageIndex++;

        if (messageIndex >= messages.length) {
            messageIndex = 0;
        }

    }, 200);

}

function newMessage() {

    const messageBox = document.getElementById("message");

    messageBox.style.opacity = "0";

    setTimeout(() => {

        messageBox.textContent =
            messages[messageIndex];

        messageBox.style.opacity = "1";

        messageIndex++;

        if (messageIndex >= messages.length) {
            messageIndex = 0;
        }

    }, 200);

}