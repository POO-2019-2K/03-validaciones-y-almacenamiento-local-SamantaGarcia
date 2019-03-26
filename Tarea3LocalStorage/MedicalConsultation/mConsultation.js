export default class Patient {
    constructor(patient){
        this._name = patient.name;
        this._date = patient.date;
        this._hour = patient.hour;
    }

    get name(){
        return this._name;
    }
    get date(){
        return this._date;
    }
    get hour(){
        return this._hour;
    }

    getDateAsString() {
        let date1 =
          this._date.getDate() +
          "/" +
          this._date.getMonth() +
          "/" +
          this._date.getFullYear();
    
        return date1;
      }

      getHourAsString() {
        let hour1 =
          this._hour.getHours() +
          ":" +
          this._hour.getMinutes();
    
        return hour1;
      }

    getDaysRemaining(){
        let dia = 24 * 60 * 60 * 1000;
        let resta = new Date() - this._date;
        let total = resta / dia;
        return total;
    }
}