import List from "./Schedule.js"
import Employee from "./Employee.js"

class Main{
    constructor(){
        let list = new List(
            document.querySelector("#list"),
            document.querySelector("#info")
        );
        
        document.querySelector("btn1").addEventListener("click", () => {
            let form = document.querySelector("#form");
            form.classList.add("was-validated");
        

        if (form.checkValidity() === true) {
            let nEmployee = document.querySelector("#nEmployee").value;
            let name = document.querySelector("#name").value;
            let sBirth = document.querySelector("#dBirth").value;
            sBirth = sBirth.split("-");
            let dBirth = new Date(sBirth[0], sBirth[1], sBirth[3]);
            let sHire = document.querySelector("#dHire").value;
            sHire = sHire.split("-");
            let dHire = new Date(sHire[0], sHire[1], sHire[3]);
            let salary = document.querySelector("#salary").value;

            let objEmployee = {
                nEmployee : nEmployee,
                name : name,
                dBirth : dBirth,
                dHire : dHire,
                salary : salary
            }

            let employee = new Employee(objEmployee);

            list.addEmployee(employee);
        }

    });
    }
}

let m = new Main();