class Person {
  constructor(firstName, lastName, birthPlace, birthDate) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;
    this.birthPlace = birthPlace;
  }
  //   constructor(birthPlace, birthDate){
  //      this.birthDate = birthDate;
  //     this.birthPlace = birthPlace;
  //   }
  printInfo = () => {
    console.log(`Nama lengkap : ${this.firstName} ${this.lastName}`);
    console.log(`Tempat Tanggal Lahir : ${this.birthDate},${this.birthPlace}`);
  };
  getAge = () => {
    var today = new Date();
    return today.getFullYear() - this.birthDate.getFullYear();
  };
  printUmur = () => {
    console.log(
      `Usia ${this.firstName} ${this.lastName} adalah ${this.getAge()} tahun`
    );
  };
}
