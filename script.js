let sc = ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg", "img/6.jpg", "img/download.jpg"];
let img = document.querySelector("#img");
let sira = 0;

// setInterval(batn, 3000);

function batn() {

    document.querySelector("#btn2")
    document.getElementById("line1").style.width = "1298px";
    if (sira >= 0 && sira < sc.length - 1) {
        sira++;
    } else if (sira == sc.length - 1) {
        sira = 0;
    }
    img.src = sc[sira];
    // document.getElementById("line1").style.width = "5px";
}

document.querySelector("#btn1").addEventListener('click', () => {


    if (sira == 0) {
        sira = sc.length - 1;
    } else {
        sira--;
    }
    console.log(sira);
    img.src = sc[sira];

});