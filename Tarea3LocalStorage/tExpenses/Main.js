import Schedule from "./Schedule.js";
import Expense from "./tExpenses.js";

class Main{
    constructor(){
        let list = new Schedule(
            document.querySelector("#list"),
            document.querySelector("#info")
        );

        document.querySelector("#btn3").addEventListener("click", () =>{
            let form = document.querySelector("#form");
            form.classList.add("was-validated");

            if(form.checkValidity() === true){
                let sdate = document.querySelector("#date").value;
                sdate = sdate.split("-");
                
                let date = new Date(sdate[0], sdate[1] - 1, sdate[2]);
                let type = document.querySelector("#type").value;
                let concept = document.querySelector("#type").value;
                let rode = document.querySelector("#rode").value;

                let objExpense = {
                    date : date,
                    type : type,
                    concept : concept,
                    rode : rode
                }
                let expense = new Expense(objExpense);

                list.addExpense(expense);
            }
        });
    }
}

let m = new Main();