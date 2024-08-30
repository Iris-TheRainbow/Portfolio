function generateGallery(){
    let string = "";
    fetch("Portfilio/galleryimgs.txt")
        .then((res) => res.text())
        .then((text) => {
            let imgs = text.split("\n");
            for (let i = 0; i < (imgs.length - 1); i++){
                string += "<img src=\"" + imgs[i] + "\"> "
            }
            document.getElementById("images").innerHTML = string;
        })
        .catch((e) => console.error(e));

}