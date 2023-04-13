//deklarasi variable : var let const
var nama = "Rahmad suryadi";
var dia = "Rahmad ";
console.log("anjay mabar");
console.log((dia, nama));
let angka = 12;
console.log(angka);
console.log(typeof angka);
console.log(typeof nama);
// let angka = "sdf";
//leta ga bsa dideklarasi lg dengan nama yang sama
var cekAngka = angka == 10 ? true : false;
console.log(cekAngka);
console.log(typeof cekAngka);

var kota;
console.log(typeof kota);

kalimat = "selamat pagi semua";

function coba(params) {}
console.log(typeof coba);
const atas = () => {};
console.log(typeof atas);

//operator +-/*%
var kaPertama = "Halo";
var kaKedua = "semua";
var angkaPertama = 12;
var angkaKedua = 3;
//NaN= Non A Number
(12).toString();
angka.toString();
toString(12);

var valueStringBool = "true";
console.log(Boolean(20));
console.log(Boolean("halo"));

console.log(Boolean("false"));
var cek = valueStringBool == "true" ? true : false;

console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(NaN));

// date time
var tglSekarang = new Date();
console.log(tglSekarang);
console.log(typeof tglSekarang);

var hariBuruh = new Date(2023, 5 - 1, 1); //yyyy-MM-dd
console.log(hariBuruh);
var hariKemerdekan = new Date(1945, 7, 17, 15, 10, 12);
console.log(hariKemerdekan);
console.log("sadf", Date().toLocaleString());
console.log(tglSekarang.toLocaleDateString());
console.log(tglSekarang.toDateString());
console.log(tglSekarang.toTimeString());
console.log(tglSekarang.toLocaleDateString("id-ID"));
console.log(
  tglSekarang.toLocaleDateString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  })
);
console.log(
  tglSekarang.toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
);
var kumpulanHari = [
  "Minggu",
  "Senin",
  "selasa",
  "rabu",
  "kamis",
  "jumat",
  "sabtu",
  "minggu",
];
kumpulanHari[tglSekarang.getDay()];
console.log(tglSekarang.getFullYear());
console.log(tglSekarang.getYear());

var hasil = `dafdsf
               sdf `;
console.log(hasil);
var kata2 = "nama saya yadi";
console.log(kata2.indexOf("saya"));

var saya = "yadi mabar";
console.log(saya.startsWith("mabar"));
console.log(saya.startsWith("yadi"));
console.log(saya.startsWith("yadi", 1));

//if else
//collection
var kumpulanHewan = [];
kumpulanHewan[0] = "Kucing";
kumpulanHewan[1] = "Kuda";
kumpulanHewan[2] = "Semut";
// kumpulanHari.push(50);

// console.log("ini arry", kumpulanHewan[]);

// for (i = 0; i <= kumpulanHewan.length; i++) {
//   console.log(kumpulanHewan[i]);
// }

var kumpulanNama = new Array();
kumpulanNama["Jojo"] = 30;
kumpulanNama["Annisa"] = 20;
console.log(kumpulanNama["Jojo"]);

var kursi = [];
kursi[0] = [];
kursi[0][0] = "booked1";
kursi[0][1] = "booked2";
kursi[0][2] = "booked3";
kursi[1] = [];
kursi[1][0] = "booked1";
kursi[1][1] = "booked2";

for (i = 0; i < kursi.length; i++) {
  for (j = 0; j < kursi[i].length; j++) {
    console.log(kursi[i][j]);
  }
}

kumpulanHewan.forEach((element) => {
  console.log("foreach" + element);
});
//bisa diganti in/of
for (let hewan in kumpulanHewan) {
  console.log(hewan);
  //hewan = index dari kumpulan hewan
}

console.log(
  kumpulanHewan.map((hewan) => {
    //   console.log("map" + hewan);
    return hewan;
  })
);
// console.log(kursi[1].length);

var funcPrint = function print(value) {
  console.log("tes" + value);
  return value;
};

kumpulanHewan.map(funcPrint);
console.log(kumpulanHewan.map(funcPrint));

//foreach lamda/arrow function
var functionPrintNama = () => {
  console.log("hellow world");
};

let hasilMod = (angka, angkaPembagian) => angka % angkaPembagian;
console.log(hasilMod(11, 2));

/////OBEJECT
var listPendidikan = ["sd", "sma", "smp", "kuliah"];

var person = {};
person.namaDepan = "Rahmad";
person.namaBelakang = "Suryadi";
person.umur = 24;
person.kumpulanHobi = ["Membaca", "Mendengarkan musik"];
person.printPendidikan = function () {
  listPendidikan.forEach((tes) => {
    console.log(tes);
  });
};
person.printHobi = function () {
  //   for (let hobi of this.kumpulanHobi) {
  //     console.log(hobi);
  //   }
  this.kumpulanHobi.forEach(function (hobi) {
    console.log(hobi);
  });
};

person.printPendidikan();
person.printHobi();

//object function seperti json format
var kendaraan = () => ({
  merek: "honda vario",
  type: "Kendaraan roda dua",
  nomorRangka: "234KSDFH2",
  nomorPolisi: "BASD231J",
  warna: "Putih",
});
//object tanpa function
var motor = {
  merek: "honda vario",
  type: "Kendaraan roda dua",
  nomorRangka: "234KSDFH2",
  nomorPolisi: "BASD231J",
  warna: "Putih",
};
person.kendaraan = kendaraan;
person.motor = motor;
person.perusahaan = {
  compannyName: "BC",
  datehire: new Date(),
};
console.log(person.motor);
console.log(person.kendaraan);
console.log(person.perusahaan["compannyName"]);
console.log(person.perusahaan.compannyName);

function penjumlahanDuaAngka(angkaPertama) {
  return function (angkaKedua) {
    return angkaPertama + angkaKedua;
  };
}
function penjumlahantigaAngka(angkaPertama) {
  return function (angkaKedua) {
    return function (angkaKetiga) {
      return angkaPertama + angkaKedua + angkaKetiga;
    };
  };
}

var angkaPertama = penjumlahanDuaAngka(2);
var hasil = angkaPertama(1);
console.log(hasil);

console.log(penjumlahantigaAngka(5)(1)(5));

var johan = {
  namaDepan: "Johan",
  namaBelakang: "Cussoy",
  usia: 22,
};
function printNamaLengkap() {
  return `${this.namaDepan} ${this.namaBelakang}`;
}
console.log(printNamaLengkap.call(johan));

///scope variable
let namaDepan = "Annise";
{
  let namaDepan = "Hanna";
}

//destructive variable
let [kataPertama, kataKedua, kataKetiga] = ["anggur", "mangga", "markisah"];
console.log(`kata Pertama = ${kataPertama}`);
console.log(`kata Kedua = ${kataKedua}`);

let jojo = {
  firstName: "jojo",
  lastName: "tri",
  age: 26,
};
//rules key harus sama
let { firstName, lastName, age } = jojo;

var andi = new Person("Andi", "Kurniawan", "Bandung", new Date(1990, 10, 10));

var budi = new Employee(
  "budi",
  "Kurniawan",
  "Bandung",
  new Date(1990, 10, 10),
  "DSFDS21231",
  "cuci gudang",
  new Date()
);

budi.printInfo();
console.log(andi.getAge());
budi.printInfoEmploye();

//JSON
let kucing ={
  "umur":12,
  "jenis":"anggora"
}
//fungsi json untuk mentransfer data dari backend to frontend
//agar lebih mudah dalam penggunaan datanya
// data yang di kirim berbentuk string dengan format penulisan json
//agar lebih mudah dalam convert menjadi object
//dengan memanfaatkan stringyfy dan parse
let karyawanIGLO = {
  "febri":{
    "namaLengkap":"Rahmad Suryadi",
    "nik" : 234324
  },
  "boby" :{
    "namaLengkap":"Boby Widjaja",
    "nik":1502832
  },
  "haikal":{
    "namaLengkap" : "Muhammad haikal",
    "nik" :123213
  }
}
console.log(karyawanIGLO.boby.namaLengkap);
console.log(karyawanIGLO["boby"].namaLengkap);

//DOM
//menyelesaikan tampilan dahulu baru menjalankan js
for(var properti of person){
  console.log(`${properti},${typeof person[properti]}`);
}