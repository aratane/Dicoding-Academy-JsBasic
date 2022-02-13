console.log("Dicoding Academy");
console.log(3 + 2);

let firstName;
firstName = "Ihsan";
console.log(firstName);

let nnmLengkap = "Ihsan Maulana";
console.log(nnmLengkap);

/*
let lastName;
lastName = "Maulana";
console.log(lastName);
*/

// let fullName = (lastName = "Maulana");
let fullName = "Michael " + "Danial " + "Muhammad " + "Ihsan " + "Maulana";
console.log(fullName);

const z = 200;
console.log(z);

let u;
console.log(typeof(u));

let p = 10;
console.log(typeof(p));

let o = 18.97;
console.log(typeof(o));

let a = 270; // operator aritmatika
let b = 68;
console.log(a + b);
console.log(a - b);
console.log(a / b);
console.log(a * b);
console.log(a % b);

let bilangan = 20;
console.log(bilangan++); // sebelum nilai di tingkatkan
console.log(bilangan);

let angka = 12;
console.log(++angka); // sesudah nilai ditingkatkan

const bigNumber = 123456782823672332323232323236n;
const myInt = 1672162111;

console.log(bigNumber);
console.log(myInt);

const besarTapiKecil = 8n;
console.log(besarTapiKecil);

console.log("Data big int : ");
console.log(10n + 3n);
console.log(9n - 8n);
console.log(20n / 2n);
console.log(3n * 6n);
console.log(5n % 2n);

let nama = "Ihsan";
console.log(typeof(nama));

const pertanyaan = '"Apakah belajar javaScript itu mudah?" Aku bertanya padamu';
console.log(pertanyaan);

const jawaban = '"Aku pikir it\'s Amazing!" Bahasa itu menakjubkan';
console.log(jawaban);

console.log("Windows path: C:\\Program Files\\MyProject");

let greet = "Hello";
let moreGreet = greet + greet;
console.log(moreGreet);

let abi = "Aku";
let abiku = abi + " " + abi;
console.log(abiku);

let x = true;
let y = false;

console.log(typeof(x));
console.log(typeof(y));

const l = 10;
const h = 12;

let isGreater = l > h;
let isLess = l < h;

console.log(isGreater);
console.log(isLess);

let kosong = null;
console.log(kosong);

const id = Symbol("id");
console.log(id);

const id1 = Symbol("id");
const id2 = Symbol("id");
console.log(id1 == id2);

let g = 10; // sortcut operator
let v = 5;

g += v;
g -= v;
g /= v;
g *= v;
g %= v;
console.log(g);

/* 
== Membandingkan kedua nilai apakah sama. (tidak identik).
!= Membandingkan kedua nilai apakah tidak sama. (tidak identik).
=== Membandingkan kedua nilai apakah identik.
!== Membandingkan kedua nilai apakah identik.
> Membandingkan dua nilai apakah nilai pertama lebih dari nilai kedua.
>= Membandingkan dua nilai apakah nilai pertama lebih atau sama dengan nilai kedua.
< Membandingkan dua nilai apakah nilai pertama kurang dari nilai kedua.
<= Membandingkan dua nilai apakah nilai pertama kurang atau sama dengan nilai kedua.
*/

let j = 10;
let d = 12;
console.log(j < d);
console.log(j > d);

const aString = '10';
const aNumber = 10;
console.log(aString == aNumber);
console.log(aString === aNumber);

/* 
&& Operator dan (and). Logika akan menghasilkan nilai true apabila semua kondisi terpenuhi (bernilai true).
|| Operator atau (or). Logika akan menghasilkan nilai true apabila ada salah satu kondisi terpenuhi (bernilai true).
! Operator tidak (not). Digunakan untuk membalikkan suatu kondisi.
*/

let r = 10;
let f = 12;

console.log("Ini adalah bagian operator AND : ");
// operator AND
console.log(r < 15 && f > 10);
console.log(r > 15 && f > 10);
console.log("Ini adalah bagian operator OR : ");
// operator OR
console.log(r < 15 || f > 10);
console.log(r > 15 || f > 10);
console.log("Ini adalah bagian operator NOT : ");
// operator NOT
console.log(!(r < 15)); // hasilnya true namun di balikan menjadi false
console.log(!(r < 15 && f > 10)); // hasilnya juga true namun di balikan menjadi false

