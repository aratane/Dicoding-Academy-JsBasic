let myArray = ["Cokelat", 42.5, 22, true, "Programming"];
console.log(myArray);
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);
console.log(myArray[3]);
console.log(myArray[4]);
console.log("Panjang nilai myArray adalah " + myArray.length + ".");

let arraySaya = ["Ihsan", 23.4, 17, true, "Maulana"];
arraySaya.push('JavaScript');
console.log(arraySaya);
// Nah, untuk menambahkan data ke dalam array, kita bisa menggunakan metode push(). Fungsi push ini akan menambahkan data di akhir array.
arraySaya.pop();
console.log(arraySaya);
// Sedangkan untuk mengeluarkan data atau elemen terakhir dari array, kita bisa gunakan metode pop().
arraySaya.shift();
console.log(arraySaya);
// Metode shift() digunakan untuk mengeluarkan elemen pertama dari array,
arraySaya.unshift("Ihsan");
console.log(arraySaya);
// unshift() digunakan untuk menambahkan elemen di awal array.
delete arraySaya[1]; // akan menghapus data dari array
console.log(arraySaya);

arraySaya.splice(2, 1); // Menhapus dari index 2 sebanyak 1 elemen
console.log(arraySaya);

// ujian dicoding

const evenNumber = [];
for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) { // isi 0 untuk hasil genap dan isi 1 untuk hasil ganjil
        evenNumber.push(i);
    }
}
console.log(evenNumber);
console.log("===============================");
// bab fungsi

function greeting() {
    console.log("Selamat sore");
}
greeting();
console.log("===============================");

function menyapa(nama, bahasa) {
    if (bahasa === "Inggris") {
        console.log("Good Morning " + nama + "!");
    } else if (bahasa === "Prancis") {
        console.log("Bounjour " + nama + "!");
    } else {
        console.log("Selamat pagi " + nama + "!");
    }
}

let pesanMenyapa = menyapa("Harry", "");
console.log(pesanMenyapa);
console.log("===============================");

function hitung(a, b) {
    return a * b;
}
let hasil = hitung(10, 2);
console.log(hasil);
console.log("===============================");

const sapa = function(nama, bahasa) {
    if (bahasa === "Inggris") {
        return "Good Morning " + nama + "!";
    } else if (bahasa === "Sunda") {
        return "Wilujeng Poe " + nama + "!";
    } else {
        return "Selamat pagi " + nama + "!";
    }
}

console.log(sapa("Ihsan", "Sunda"));

console.log("===============================");

// ujian fungsi dicoding

function minimal(a, b) {
    if (a < b) {
        return a;
    } else if (a > b) {
        return b;
    } else if (a === b) {
        return a;
    }
}
console.log(minimal(102, 10));

function power(a, b) {
    return a ** b;
}
console.log(power(5, 7));