//1
class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;
     
    constructor(
          id: string,
          email: string,
          name: string,
          password: string
      ){
          console.log("Chamando o construtor da classe User")
          this.id = id
          this.email = email
          this.name = name 
          this.password = password
      }
  
      public getId(): string {
          return this.id
      }
  
      public getEmail(): string {
          return this.email
      }
  
      public getName(): string {
          return this.name
      }
}

const meUser = new User("5","renata@email", "renata", "rnt1988")
// console.log(User)
console.log(meUser)


//2
class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;
  
    constructor(
      id: string,
      email: string,
      name: string,
      password: string,
      creditCard: string
    ) {
      super(id, email, name, password);
      console.log("Chamando o construtor da classe Customer");
      this.creditCard = creditCard;
    }
  
    public getCreditCard(): string {
      return this.creditCard;
    }
}

const meCustomer = new Customer("10", "zamboni@email", "zamboni","1988", "058101988")
// console.log(Customer)
// console.log(meCustomer instanceof User)
// console.log(meCustomer instanceof Customer)
console.log(meCustomer)

//falta imprimir o "purchaseTotal"

