import Employee from "./Employee.js";

export default class List{
    constructor(tableList, tableInfo){
          this._tableList = tableList;
          this._tableInfo = tableInfo;
          this._salary1 = 0;
          this._salary2 = 0;
          this._salary3 = 0;
          this._aSalary = 0;
          this._aAge = 0;
          this._numEmployees = 0;
          this._employees = [];

          this._initTables();
    }

    _initTables(){
        let employees = JSON.parse(localStorage.getItem("employees"));

        employees.forEach((employee, index) => {
            employee.dBirth = new Date(employee.dBirth);
            employee.dHire = new Date(employee.dHire);
            this._showInTable(new Employee(employee));
        });
    }

    _showInTable(employee){
        let row = this._tableList.insertRow(-1);

        let cellnEmployee = row.insertCell(0);
        let cellName = row.insertCell(1);
        let celldBirth = row.insertCell(2);
        let celldHire = row.insertCell(3);
        let cellSalary = row.insertCell(4);
        let cellAge = row.insertCell(5);
        let cellAntiquity = row.insertCell(6);

        cellnEmployee.innerHTML = employee.nEmployee;
        cellName.innerHTML = employee.name;
        celldBirth.innerHTML = employee.getBirthdayAsString();
        celldHire.innerHTML = employee.getHireAsString();
        cellSalary.innerHTML = employee.salary;
        cellAge.innerHTML = employee.getAge();
        cellAntiquity.innerHTML = employee.getAntiquity();

        this._numEmployees++;

        if (employee.salary <= 10000 ) {
            this._salary1++;
            this._tableInfo.rows[1].cells[1].innerHTML = this._salary1;
        } if (employee.salary > 10000 && employee.salary < 20000) {
            this._salary2++;
            this._tableInfo.rows[2].cells[1].innerHTML = this._salary2;
        } if (employee.salary > 20000) {
            this._salary3++;
            this._tableInfo.rows[3].cells[1].innerHTML = this._salary3;
        }

        this._aSalary += salary;
        this._tableInfo.rows[4].cells[1].innerHTML = this._aSalary / this._numEmployees;

        this._aAge += employee.getAge();
        this._tableInfo.rows[5].cells[1].innerHTML = this._aAge / this._numEmployees;

      let objEmployee = { //crear objeto
        nEmployee : employee.nEmployee,
        name : employee.name,
        dBirth : employee.dBirth,
        dHire : employee.dHire,
        salary : employee.salary
      };
      this._employees.push(objEmployee);

    }

    addEmployee(employee){
        this._showInTable(employee);
        this._employees.push(employee);
        localStorage.setItem("employees", JSON.stringify(this._employees));
        console.log(localStorage.getItem("employees"));
    }

}