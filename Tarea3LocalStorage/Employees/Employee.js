export default class Employee{
    constructor(employee){
        this._nEmployee = employee.nEmployee;
        this._name = employee.name;
        this._dBirth = employee.dBirth;
        this._dHire = employee.dHire;
        this._salary = employee.salary;

    }

    get nEmployee(){
        return this._nEmployee;
    }
    get name(){
        return this._name;
    }
    get dBirth(){
        return this._dBirth;
    }
    get dHire(){
        return this._dHire;
    }
    get salary(){
        return this._salary;
    }

    getBirthdayAsString(){
        let date =
          this._dBirth.getDate() +
          "/" +
          this._dBirth.getMonth() +
          "/" +
          this._dBirth.getFullYear();
    
        return date;
      }
    
    getHireAsString(){
        let date2 = this._dHire.getDate() + "/" + this._dHire.getMonth() + "/" + this._dHire.getFullYear();
  
      return date2;
      }

      getAge() {
        let oneDay = 24 * 60 * 60 * 1000;
        let oneYear = oneDay * 365;
        let differenceMs = new Date() - this._dBirth;
        let age = Math.trunc(differenceMs / oneYear);
    
        return age;
      }

      getAntiquity(){
          let oneDay = 24 * 60 * 60 * 1000;
          let oneYear = oneDay * 365;
          let difference = new Date() - this._dHire;
          let antiquity = Math.trunc(difference / oneYear);
          return antiquity;
      }
}