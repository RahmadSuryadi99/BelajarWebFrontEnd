//3 opsi untuk buat DOM ,taro file js di akhir tag html, taro di headwer dengan tambahan properti,tang terakhir seperti di bawah
document.addEventListener("DOMContentLoaded", function () {
  //ngoding dsni
//   document.querySelector('.home').textContent="Rumah";
  let text =  document.querySelector('.header')
  text.textContent ="anjay mabar"

  var btnReplaceNameMenu = document.getElementById("setNameMenu");
  btnReplaceNameMenu.addEventListener("click", setDataKaryawan)
});

function printTes() {
    console.log(document.getElementById("tglLahir").value);
}
var replaceNameMenus =()=>{
     var nav = document.querySelector(".nav");
     var menus = nav.childNodes;
     menus.forEach((element) => {
       console.log(element);
       var clasName = element.className;
       element.textContent = clasName;
     });
}
var setDataKaryawan =()=>{
    
    // var nav = document.querySelector()
    document.getElementById("namaDepan").value = karyawanIGLOo.boby.namaDepan;
    document.getElementById("namaBelakang").value =
    karyawanIGLOo.boby.namaBelakang;
    document.getElementById("tempatLahir").value = karyawanIGLOo.boby.tempatLahir;
    document.getElementById("tglLahir").value = formatDate(karyawanIGLOo.boby.tglLahir);
    }
// $(function(){
//     let sideBar =  document.querySelector(".nav")
//     sideBar.style.background="green"
//     let anakNav = sideBar.children
//     console.log(anakNav);
//     // document.querySelector(".home").style.color="green"
// });
let karyawanIGLOo = {
  "vina":{
    "namaDepan":"Vina",
    "namaBelakang" : "Septiani",
    "tempatLahir" : "Jakarta",
    "tglLahir":new Date(1994,10-1,18)
  },
  "boby" :{
    "namaDepan":"Boby",
     "namaBelakang":"Widjaja",
     "tempatLahir":"Jakarta",
    "tglLahir": new Date(1989,12,18)
  },
  "haikal":{
    "namaDepan":"Muhammad",
     "namaBelakang":"Haikal",
     "tempatLahir":"Bandung",
    "tglLahir": new Date(1990,2-1,22)
  }
}
console.log(karyawanIGLOo.boby.tglLahir.getMonth());

function  formatDate (date){
    var day = date.getDate(),
      month = date.getMonth()+1 ,
      year = date.getFullYear()
    console.log(date.getMonth());
    console.log(karyawanIGLOo.boby.tglLahir.getMonth());
    month = (month < 10 ? "0" : "") + month;
    day = (day < 10 ? "0" : "") + day;

    var today = year + "-" + month + "-" + day
    return today;
}
