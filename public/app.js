"use strict";
// Classes
class Invoice {
    /*readonly client: string;
    private details: string;
    public amount: number;
  
    constructor(c: string, d: string, a: number) {
      this.client = c;
      this.details = d;
      this.amount = a;
    }
    */
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoice("Mario", "Work on the Mario website", 250);
const invTwo = new Invoice("Luigi", "Work on the Luigi website", 300);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invTwo.amount = 400;
console.log(invoices);
invoices.forEach(inv => {
    console.log(inv.format());
});
//const form = document.querySelector("form")!;
const form = document.querySelector(".new-item-form");
console.log(form.children);
//INPUTS
const type = document.querySelector("#type");
const toFrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
