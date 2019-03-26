import Patient from "./mConsultation.js"

export default class List{
    constructor(tableList, tableInfo){
        this._tableList = tableList;
        this._tableInfo = tableInfo;
        this._patients = [];

        this._initTables();
    }

    _initTables(){
        let patients = JSON.parse(localStorage.getItem("patients"));

        patients.forEach((patient, index) => {
            patient.date = new Date(patient.date);
            patient.hour = new Hour(patient.hour);
            patient.
            this._showInTable(new Patient(patient));
        });
    }

    _showInTable(patient){
        let row = this._tableList.insertRow(-1);

        let cellName = row.insertCell(0);
        let cellDate = row.insertCell(1);
        let cellHour = row.insertCell(2);
        let cellDaysR = row.insertCell(3);

        cellName.innerHTML = patient.name;
        cellDate.innerHTML = patient.getDateAsString();
        cellHour.innerHTML = patient.getHourAsString();
        cellDaysR.innerHTML = patient.getDaysRemaining();

        let objPatient = {
            name : patient.name,
            date : patient.date,
            hour : patient.hour
        };
        this._patients.push(objPatient);
    }

    addPatient(patient){
        this._showInTable(patient);
        this._patients.push(patient);
        localStorage.setItem("patients", JSON.stringify(this._patients));
        console.log(localStorage.getItem("patients"));
    }
}