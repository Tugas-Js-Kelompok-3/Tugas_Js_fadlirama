// soal 3
function kesehatan(darah) {
    if (darah >= 100){
        console.log("ur fine");
    }
    else if (darah >= 50 && darah <100) {
        console.log("you need heal");
    }
    else if (darah < 50) {
        console.log("you need heal");
    }
}
kesehatan(49)

// soal 4
const array = ["fadli","ramadhani"]
console.log(array[0]+""+array[1]);

// soal 5
class identitas {
    constructor (nama, umur, perkerjaan){
        this.Nama = nama
        this.Umur = umur
        this.Pekerjaan = perkerjaan
        this.Nikah = false
    }
}
var orangi = new identitas ("fadli","17","nganggur");
console.log(orangi)