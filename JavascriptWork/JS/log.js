function log(msg) {
    const debug = document.getElementById("debugConsole");
    if(debug !== null){ //제대로 접근했다면..?
        debug.innerHTML += msg + "<br/>";
    }
}
