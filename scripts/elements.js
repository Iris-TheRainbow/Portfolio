function generateElements(){
    document.getElementById("footer").innerHTML = `
            <div class="footerContainer">
                <hr>
                <div>
                    <button onclick="window.location.href='about'">About Me</button>
                </div>
                <div>
                    <button onclick="window.location.href='asignments'">Asignments</button>
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
                <button onclick="window.location.href='/'" style="font-size: 350%; width: fit-content; background-color: #313244;"> Jazz's Portfolio</button>
            </div>
        </div>`
}