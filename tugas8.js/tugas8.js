// soal 3
function array(value) {
    const result = value.map(el =>{
        const newarr = ""
        return el += newarr
    })
    const split = result[3].split(',')
    result.pop()
    console.log(result,split.join(' '))
}
array(['hallo','nama','saya',['fadli','ramadhani',['kelas','11',['rpl','2']]]])    

// soal 4
const obj = {
    nama: "fadli",
    kelas: "11 rpl 2",
    umur: 17,
    nikah: false,
    hp: {
        nama: "xiaomi redmi note 9 pro",
        spesifikasihp: {
            chipset: "snapdragon 720G",
            ram: "6 GB",
            rom: "128 GB",
            camera: "64mp"
        }
            
    }
}
console.log(obj.hp);