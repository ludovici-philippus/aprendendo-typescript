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

  constructor(
    readonly client: string,
    private details: string,
    public amount: number,
  ) { }

  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}

const invOne = new Invoice("Mario", "Work on the Mario website", 250);
const invTwo = new Invoice("Luigi", "Work on the Luigi website", 300);

let invoices: Invoice[] = [];

invoices.push(invOne);
invoices.push(invTwo);

invTwo.amount = 400;

console.log(invoices);

invoices.forEach(inv => {
  console.log(inv.format());
})

//const form = document.querySelector("form")!;
const form = document.querySelector(".new-item-form") as HTMLFormElement;
console.log(form.children);

//INPUTS
const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
