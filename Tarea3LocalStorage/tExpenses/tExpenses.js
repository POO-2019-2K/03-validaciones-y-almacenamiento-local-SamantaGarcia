export default class Expense{
    constructor(expense){
        this._date = expense.date;
        this._type = expense.type;
        this._concept = expense.concept;
        this._rode = expense.rode;
    }

    get date(){
        return this._date;
    }
    get type(){
        return this._type;
    }
    get concept(){
        return this._concept;        
    }
    get rode(){
        return this._rode;
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
}