//perulang for,for in,for off
const hewan = ["ikan", "harimau", "gajah", "jerapah",]

for (let i = 0; i < hewan.length; i++){
    console.log(hewan[i]);
}

const buah = ['mangga', 'apel', 'jeruk',];
let a = 0;
for (let a in buah) {
    console.log(buah[a]) ;
}

const nikname = ["viki", "sigit", "syam"];
for (let x of nikname) {
    console.log(x);
}



//function perkalian + arrow function
let func = (a, b) => {
    perkalian = a * b;
};

func(20, 4)
console.log(perkalian);
