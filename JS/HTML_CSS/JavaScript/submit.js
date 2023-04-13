let count = 0;
let isSubmit = 0;
let idTbl = "t1" ;

let dataForm = {
  namaLengkap:"",
  tmptTglLahir:"",
  alamat:"",
  noHp:"",
  jenisKelamin:""
}
document.addEventListener("DOMContentLoaded", function () {
 
  let text = document.querySelector(".header");
  text.textContent = "anjay ";
  var tes = Number(
    document.querySelector("tbody tr:last-child td:nth-child(3)").textContent
  );
  count = tes + 1;
  var formInput = document.forms.formBiodata;
  formInput.addEventListener("submit", function (event) {
    event.preventDefault();
    var namaDepan = document.querySelector("#namaDepan").value;
    var namaBelakang = document.querySelector("#namaBelakang").value;
    var tempatLahir = document.querySelector("#tempatLahir").value;
    var tglLahir = new Date(document.querySelector("#tglLahir").value);
    var alamat = document.querySelector("#alamat").value;
    var noHp = document.querySelector("#noHp").value;
    var getKlamin = document.querySelector(
      `input[name="gender"]:checked`
    ).value;
    var JenisKelamin = getKlamin;

    var tbl = document.querySelector("tbody");
    var trTbl = document.createElement("tr");
    trTbl.setAttribute("id", `t${count}`);
    tbl.appendChild(trTbl);

    var tdNol = document.createElement("td");
    var tdSatu = document.createElement("td");
    var tdDua = document.createElement("td");
    var tdTiga = document.createElement("td");
    var tdEmpat = document.createElement("td");
    var tdLima = document.createElement("td");
    var tdEnam = document.createElement("td");
    var tdTujuh = document.createElement("td");

    tdSatu.setAttribute("class", "action");

    trTbl.appendChild(tdNol);
    trTbl.appendChild(tdSatu);
    trTbl.appendChild(tdDua);
    trTbl.appendChild(tdTiga);
    trTbl.appendChild(tdEmpat);
    trTbl.appendChild(tdLima);
    trTbl.appendChild(tdEnam);
    trTbl.appendChild(tdTujuh);

    tdDua.textContent = count;
    tdTiga.textContent = `${namaDepan} ${namaBelakang}`;
    tdEmpat.textContent = `${tempatLahir} ${tglLahir.toLocaleDateString(
      "id-ID",
      { day: "numeric", month: "long", year: "numeric" }
    )}`;
    tdLima.textContent = alamat;
    tdEnam.textContent = noHp;
    tdTujuh.textContent = JenisKelamin;
    tdSatu.innerHTML = ` <a class="btn btn-update"  onclick=updtRow(this)>
      <i class="fa fa-pencil">
      <span>Edit</span>
      </i>
      </a>
      <a class="btn btn-delete" onclick=delRow(this) >
      <i class="fa fa-trash">
      <span>hapus</span>
      </i>
      </a>`;
    count+=1;

    formInput.reset();
  });
});
var delRow = (btn) => {
  btn.closest("tr").remove();
};
var updtRow = (btn) => {
   document.querySelector("#submit").style.display = "none";
  var data = btn.closest("tr");
  var namaSplit = data.children[3].textContent.split(" ");
  var tmptTglSplit = data.children[4].textContent.split(" ");

  var tgl = new Date(
    `${tmptTglSplit[3]}-${tmptTglSplit[2]}-${tmptTglSplit[1]}`
  );

  (document.querySelector("#namaDepan").value = namaSplit[0]);
  (document.querySelector("#namaBelakang").value =namaSplit[1]);
  (document.querySelector("#tempatLahir").value =tmptTglSplit[0].replace(",", ""));
  (document.querySelector("#tglLahir").value = formatDate(tgl));
  (document.querySelector("#alamat").value =data.children[5].textContent);
  (document.querySelector("#noHp").value =data.children[6].textContent);
  (document.querySelector(`[name='gender'][value=${data.children[7].textContent}]`).checked = true);
  idTbl =  data.id;
  document.querySelector("#simpan").style.display = "";
};

//21-2-1321
var formatTgl = (tgl) => {
  return `${tgl.getFullYear()}-0${tgl.getMonth()}-${tgl.getDate()}`;
};

const updateData = ()=>{
    var namaDepan = document.querySelector("#namaDepan").value;
    var namaBelakang = document.querySelector("#namaBelakang").value;
    var tempatLahir = document.querySelector("#tempatLahir").value;
    var tglLahir = new Date(document.querySelector("#tglLahir").value);
    var alamat = document.querySelector("#alamat").value;
    var noHp = document.querySelector("#noHp").value;
    var getKlamin = document.querySelector(`input[name="gender"]:checked`).value;

  document.querySelector(`#${idTbl} td:nth-child(4)`).textContent = `${namaDepan} ${namaBelakang}`;
  document.querySelector(`#${idTbl} td:nth-child(5)`).textContent = `${tempatLahir} ${tglLahir.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })}`;
  document.querySelector(`#${idTbl} td:nth-child(6)`).textContent = alamat
  document.querySelector(`#${idTbl} td:nth-child(7)`).textContent = noHp
  document.querySelector(`#${idTbl} td:nth-child(8)`).textContent = getKlamin
  document.querySelector("#simpan").style.display = "none";
  document.querySelector("#submit").style.display = "";
document.forms.formBiodata.reset();
}
// var btnSimpan = () => {
//   formInput.addEventListener("submit", function (event) {
//     event.preventDefault();
//     if (isSubmit) {
//       // submit();
//       console.log("submit");
//     } else {
//       // updateData();
//       console.log("update");
//     }
//   });
// };


function formatDate(date) {
  var day = date.getDate(),
    month = date.getMonth() + 1,
    year = date.getFullYear();
  month = (month < 10 ? "0" : "") + month;
  day = (day < 10 ? "0" : "") + day;

  var today = year + "-" + month + "-" + day;
  return today;
}

const getValueForm=()=>{
  var namaDepan = document.querySelector("#namaDepan").value;
  var namaBelakang = document.querySelector("#namaBelakang").value;
  var tempatLahir = document.querySelector("#tempatLahir").value;
  var tglLahir = new Date(document.querySelector("#tglLahir").value);
  var alamat = document.querySelector("#alamat").value;
  var noHp = document.querySelector("#noHp").value;
  var getKlamin = document.querySelector(`input[name="gender"]:checked`).value;

  dataForm.namaLengkap=`${namaDepan} ${namaBelakang}`
  dataForm.tmptTglLahir=`${tempatLahir}, ${tglLahir}`
  
}