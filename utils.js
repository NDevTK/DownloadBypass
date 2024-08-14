suffix = (navigator.userAgent.includes("Mobile")) ? Date.now() : "";

async function toDataURL(url) {
    return fetch(url).then((response) => {
            return response.blob();
        }).then(blob => {
            return URL.createObjectURL(blob);
        });
}

function getState(length) {
    state = (localStorage.hasOwnProperty("state")) ? parseInt(localStorage.getItem("state")) + 1: 0;
    if (isNaN(state) || state > length) state = 0;
    if (confirm('Allow state to be saved to localStorage?') || localStorage.getItem("state") !== null) {
        localStorage.setItem("state", state);
    } else {
        location.href = "https://ndev.tk/";
    }
}

async function download(url, filename) {
        var a = document.createElement("a");
        a.href = await toDataURL(url);
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function Redirect(url) {
    if (navigator.userAgent.includes("Firefox")) { // Bypass not needed for Firefox
        JustDoTheThingPlease();
    } else {
        if (history.next) {
            history.forward();
        } else {
            setTimeout(_ => {
               location.href = url;
            }, 200);
        }
    }
}
