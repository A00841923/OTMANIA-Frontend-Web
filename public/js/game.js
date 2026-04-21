const game = document.getElementById("gameScreen");
const gameFrame = document.getElementById("game-frame");

if (sessionStorage.getItem("id")) {
        gameFrame.src = "OTMANIA_GAME/index.html?id=" + sessionStorage.getItem("id");
    }