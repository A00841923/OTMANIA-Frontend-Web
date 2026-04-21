const game = document.getElementById("gameScreen");
const btn = document.getElementById("fsBtn");
const gameFrame = document.getElementById("game-frame");

if (sessionStorage.getItem("id")) {
        gameFrame.src = "/blablabla.html?id=" + sessionStorage.getItem("id");
    }

function toggleFullScreen() {
    if (!document.fullscreenElement) {
        // Entrar a fullscreen
        if (game.requestFullscreen) {
            game.requestFullscreen();
        } else if (game.webkitRequestFullscreen) {
            game.webkitRequestFullscreen();
        }
    } else {
        // Salir de fullscreen
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
    }
}

// Cambiar icono
document.addEventListener("fullscreenchange", () => {
    const icon = btn.querySelector("i");
    if (document.fullscreenElement) {
        icon.classList.replace("bi-fullscreen", "bi-fullscreen-exit");
    } else {
        icon.classList.replace("bi-fullscreen-exit", "bi-fullscreen");
    }
});