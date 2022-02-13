const isRaining = true;
console.log("Persiapan sebelum berangkat melakukan kegiatan");
if (isRaining) {
    console.log("Hari ini hujan. Bawa payung");
}
console.log("Berangkat kegiatan");

console.log("=================================");
let x = 40;

if (x > 70) {
    console.log(x);
} else {
    console.log("Nilai kurang dari 70");
}

console.log("=================================");
let bahasa = "Indonesia";
let salam = "Selamat Pagi!";

if (bahasa === "Inggris") {
    salam = "Good Morning";
} else if (bahasa === "Indonesia") {
    salam = "Selamat Pagi";
} else if (bahasa === "Jepang") {
    salam = "Ohayou";
}
console.log(salam);

console.log("=================================");
const isMember = true;
const discount = isMember ? 0.1 : 0;
console.log("Kamu mendapatkan diskon sebesar : " + discount * 100 + "%");

console.log("=================================");
let name = "";
if (name) {
    console.log("Hallo, " + name);
} else {
    console.log("Nama masih kosong");
}

console.log("Switch Case");
console.log("=================================");
let language = "French";
let greeting = null;

switch (language) {
    case "English":
        greeting = "Good Morning";
        break;
    case "French":
        greeting = "Bonjour";
        break;
        0
    case "Japan":
        greeting = "Ohayou";
        break;
    case "Indonesia":
        greeting = "Selamat Pagi";
        break;
    default:
        greeting = "Wilujeng Enjing";
        break;
}
console.log(greeting);
console.log("=================================");
let score = 90;
let result;
if (score >= 90) {
    result = 'Selamat! Anda mendapatkan nilai A.';
} else if (score >= 80 && score < 90) {
    result = 'Anda mendapatkan nilai B.';
} else if (score >= 70 && score < 80) {
    result = 'Anda mendapatkan nilai C.';
} else if (score >= 60 && score < 70) {
    result = 'Anda mendapatkan nilai D.';
} else if (score < 60) {
    result = 'Anda mendapatkan nilai E.';
}
console.log(result);
console.log("=================================");

for (let i = 0; i < 10; i++) {
    console.log(i);
    console.log("=================================");

}

for (let anggota = 1; anggota < 22; anggota++) {
    console.log(anggota);


}


let myArray = ['Luke', 'Han', 'Chewbacca', 'Lela'];
for (const arrayItem of myArray) {
    console.log(arrayItem);
}

let i = 1;
while (i <= 11) {
    console.log(i);
    i++;
}

i = 1;
do {
    console.log(i);
    i++;
} while (i <= 10);

i = 1;
while (i <= 5) {
    console.log(i);
    i++; // haram hukumnya untuk dihapus
}

// bab objek

const user = {};
let objek = { key1: "value1", key2: "value2", key3: "value3" };

const karakter = {
    nama: "Aratakun",
    umur: 20,
    spesies: "Manusia",
    "Warna Rambut": "Hitam",
};
console.log(karakter);

const arata = {
    namaDepan: "Arata",
    namaBelakang: "Okazaki",
    umur: 20,
    isJedi: true,
};
console.log("Hallo nama saya " + arata.namaDepan + " " + arata.namaBelakang);
console.log("Umur saya : " + arata.umur + " tahun");
console.log("=================================");

arata["Rumah dunia"]; // akses karakter khusus

const agus = {
    namaDepan: "Agus",
    namaBelakang: "Setiawan",
    umur: 23,
    isJedi: true,
    "Alamat Rumah": "Bandung",
};
console.log("Hallo, nama saya " + agus.namaDepan + " " + agus.namaBelakang);
console.log("Umur saya : " + agus.umur + " Tahun");
console.log("Saya berasal dari " + agus["Alamat Rumah"]); // contoh penggunaan karakter spesial
console.log("=================================");

const spaceship = {
    name: "Millenium Falcon",
    manufacturer: "Corellian Engineering Corporation",
    maxSpeed: 1200,
    color: "Light gray",
};
spaceship.color = "Glossy red";
spaceship["maxSpeed"] = 1300;
spaceship.class = "Light freighter";
delete spaceship.manufacturer; // menghapus atribut dan nilai pada objek spaceship
console.log(spaceship);


// kuis dan ujian bab objek

/* 
DITUTUP KARENA INI UNTUK UJIAN DI WEB DICODING, CODE AKAN ERROR
const restaurant = {
    name: "Ihsan Maulana",
    city: "Bandung",
    "favorite drink": "Juice",
    "favorite food": "Pizza",
    isVegan: true,
};

const name = restaurant["name"];
const favoriteDrink = restaurant["favorite drink"];
console.log(restaurant);
*/

const restaurant = {
    name: "Ihsan Maulana",
    city: "Bandung",
    "favorite drink": "Juice",
    "favorite food": "Pizza",
    isVegan: true,
};
restaurant.name = [""]; // nama tergantikan
restaurant.favoriteDrink = ["Anggur"];
console.log(restaurant);

// kode ini akan jalan lancar jaya