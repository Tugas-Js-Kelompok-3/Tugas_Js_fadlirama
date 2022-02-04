// //Soal 1
// class Persegi {
//     constructor(sisi){
//         this.sisi = sisi;
//     };
//     perkalian(){
//         return this.sisi * this.sisi;
//     }
//     pertambahan(){
//         return this.sisi + this.sisi;
//     }
//     pengurangan(){
//         return this.sisi - this.sisi;
//     }
//     pembagian(){
//         return this.sisi / this.sisi;
//     }
// }
// const persegi = new Persegi(69)
// console.log(persegi.pertambahan());


// //Soal 2
// const map = Array.prototype.map;
// function separate(string) {
//     const separated = map.call(string, el => {
//         return `${el}`;
//     });
//     console.log(separated.sort());
// }
// separate("fadli");



//Soal 3
function age(umur) {
    if(umur > 17) {
        console.log("fadli")
    } else {
        console.log("saya fadli")
    }
}
age(16)




// //Soal 4
// class identity {
//     constructor(Nama, Alias, Hobi){
//         this.Nama = Nama;
//         this.Alias = Alias;
//         this.Hobi = Hobi;
//     };
// };
// const identity1 = new identity("fadli", "syam", "basket")
// console.log(identity1);




// //Soal 5
// class Person {
//     constructor(nama, kelas, umur){
//         this.Nama = nama;
//         this.Kelas = kelas;
//         this.Umur = umur;
//     };
//     greeting (){
//         return (
//             "namaku " + this.Nama + " aku kelas " + this.Kelas + " umurku " + this.Umur
//         )
//     }
// };

// const fadli = new Person("fadli", 11, 17)
// console.log(fadli.greeting());