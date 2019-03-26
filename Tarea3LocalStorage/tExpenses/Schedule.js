import Expense from "./tExpenses.js";

export default class Schedule{
    constructor(tableList, tableInfo){
        this._tableList = tableList;
        this._tableInfo = tableInfo;
        this._type1 = 0;
        this._type2 = 0;
        this._type3 = 0;
        this._type4 = 0;
        this._expenses = [];

        this._initTables();
    }

    _initTables(){
        let expenses = JSON.parse(localStorage.getItem("expenses"));
        expenses.forEach((expense, index) => {
            expense.date = new Date(expense.date);
            this._showinTable(new Expense(expense));
        });
    }

    _showInTable(expense){
        let row = this._tableList.insertRow(-1);

        let cellDate = row.insertCell(0);
        let cellType = row.insertCell(1);
        let cellConcept = row.insertCell(2);
        let cellRode = row.insertCell(3);

        cellDate.innerHTML = expense.getDateAsString();
        cellType.innerHTML = expense.type;
        cellConcept.innerHTML = expense.concept;
        cellRode.innerHTML = expense.concept;

        if(expense.opc === "1"){
            cellType.innerHTML = expense.type;
            this._type1++;
            this._tableInfo.rows[1].cells[1].innerHTML = this._type1;
            }
            if(expense.opc === "2"){
                cellType.innerHTML = expense.type;
            this._type2++;
            this._tableInfo.rows[2].cells[1].innerHTML = this._type2;    
            }
            if(expense.opc === "3"){
                cellType.innerHTML = expense.type;
            this._type3++;
            this._tableInfo.rows[3].cells[1].innerHTML = this._type3;    
            }
            if(expense.opc === "4"){
                cellType.innerHTML = expense.type;
            this._type4++;
            this._tableInfo.rows[4].cells[1].innerHTML = this._type4;    
            }

            let objExpense = {
                date : expense.date,
                type : expense.type,
                concept : expense.concept,
                rode : expense.rode
            };
            this._expenses.push(objExpense);
    }

    addExpense(expense){
        this._showInTable(expense);
        this._expenses.push(expense);
        localStorage.setItem("expenses", JSON.stringify(this._expenses));
        console.log(localStorage.getItem("expenses"));
    }
}