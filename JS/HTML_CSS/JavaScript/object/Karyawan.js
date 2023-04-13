class Employee extends Person {
  constructor(
    firstName,
    lastName,
    birthPlace,
    birthDate,
    nik,
    hireDate,
    department
  ) {
    super(firstName, lastName, birthPlace, birthDate);
    this.nik = nik;
    this.hireDate = hireDate;
    this.department = department;
  }
  printInfoEmploye = () => {
    this.printInfo();
    var result = `
      NIK : ${this.nik}
      Usia : ${this.getAge()}
      Departmen : ${this.department}
      Tanggal Mulai Bekerja : ${this.hireDate}
      `;
    // ${this.getAge()}
    // Nama Lengkap : ${this.firstName} ${this.lastName}
    // TTL : ${this.birthPlace} ${this.birthDate}
    console.log(result);
  };
}
