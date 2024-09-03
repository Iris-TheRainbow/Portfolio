function generateGallery(){
    let string0 = "";
    let string1 = "";
    let string2 = "";
    let x = 0;
    fetch("/galleryimgs.txt")
        .then((res) => res.text())
        .then((text) => {
            let imgs = text.split("\n");
            for (let i = 0; i < (imgs.length - 1); i++){
                if (x == 0) {
                    string0 += "<img src=\"" + imgs[i] + "\"> "
                    x += 1
                } else if(x == 1){
                    string1 += "<img src=\"" + imgs[i] + "\"> "
                    x += 1
                } else if(x == 2){
                    string2 += "<img src=\"" + imgs[i] + "\"> "
                    x = 0
                }
            }
            document.getElementById("images0").innerHTML = string0;
            document.getElementById("images1").innerHTML = string1;
            document.getElementById("images2").innerHTML = string2;

        })
        .catch((e) => console.error(e));
}