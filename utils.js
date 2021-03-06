suffix = (navigator.userAgent.includes("Mobile")) ? Date.now() : "";

function getState(length) {
    state = (localStorage.hasOwnProperty("state")) ? parseInt(localStorage.getItem("state")) + 1: 0;
    if(isNaN(state) || state > length) state = 0;
    localStorage.setItem("state", state);
}

async function toDataURL(url) {
    return fetch(url).then((response) => {
            return response.blob();
        }).then(blob => {
            return URL.createObjectURL(blob);
        });
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
