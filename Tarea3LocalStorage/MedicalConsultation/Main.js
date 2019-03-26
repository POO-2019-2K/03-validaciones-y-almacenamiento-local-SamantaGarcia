import Patient from "./mConsultation.js"
import Schedule from "./Schedule.js"

class Main{
    constructor(){
        let list = new Schedule(
        document.querySelector("#list"),
        document.querySelector("#info")
        );

        document.querySelector("#btn2").addEventListener("click", () => {
            let form = document.querySelector("#form");
            form.classList.add("was-validated");

            if(form.checkValidity() === true){
                let name = document.querySelector("#name").value;
                let sdate = document.querySelector("#date").value;
                sdate = sdate.split("-");
                let date = new Date(sdate[0], sdate[1] - 1, sdate[2]);
                let shour = document.querySelector("#hour").value;
                shour = shour.split("-");
                let hour = new Hour(shour[0], shour[1] - 1, shour[2]);

                let objPatient = {
                    name : name,
                    date : date,
                    hour : hour
                }
                let patient = new Patient(objPatient);

                list.addPatient(patient);
            }
        });
    }
}

let m = new Main();
