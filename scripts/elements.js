function generateElements(){
    document.getElementById("footer").innerHTML = `
            <div class="footerContainer">
                <hr>
                <div>
                    <button onclick="window.location.href='robots'">About Me</button>
                </div>
                <div>
                    <button onclick="window.location.href='sponsors'">Asignments</button>
                </div>
                <div>
                    <button onclick="window.location.href='gallery'">Gallery</button>
                </div>
                <div style="float: right;">
                    <button onclick="window.location.href='contact'">Contact me!</button>
                </div>
            </div>
    `
    document.getElementById("headder").innerHTML = `
        <div class="headderContainer">
            <div class="headderColumn" style="width: fit-content; display: flex;">
                <button onclick="window.location.href='/'" style="font-size: 350%; width: fit-content; background-color: #202020;"> Jazz's Portfolio</button>
            </div>
        </div>`

    if (navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)){
        var mobile = true;
    }
}