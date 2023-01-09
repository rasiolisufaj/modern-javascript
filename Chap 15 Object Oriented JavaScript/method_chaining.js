/* 
We define methods after the constructor
!! INSIDE THE CLASS WE DON'T COMMA SEPARATE THINGS, METHODS ETC.. 
EX: class User {
          constructor(){
            ....
          }
          method()
          method()
  }

WE CAN NOT USE ARROW FUNCTIONS TO THE METHODS

!!! EVERYTIME WE CREATE A NEW USER LIKE THIS const userOne = new User("rasiol", "rasiol@gmail.com");
THESE NEW USER OBJECTS ARE GOING TO HAVE ACCESS TO THOSE METHODS ↓↓↓↓
↓↓↓↓
ENCAPSULATION !!
↑↑↑↑
____________________________________

CHAINING METHODS

NOTE: WHEN A METHOD DOESN'T EXPLICITY RETURN A VALUE AUTOMATICALLY, JAVASCRIPT ASSINGS THE RETURN VALUE TO BE UNDEFINED.

EX: userOne.login().logout(); => THIS DOES NOT WORK BECAUSE userOne.login() returns undefined, so we are trying to call the logout() method on undefined. XXX

IF WE WANT TO CHAIN METHODS TOGETHER ---> WE NEED TO RETURN 'THIS'

SO we need to return a VALUE OF WHATEVER THE USER IS (USERONE, USERTWO ETC).

SO WE WILL RETURN THE OBJECT INSTANCE => return this; ---------> remember when using 'THIS' INSIDE THE METHOD, IT REFERS TO THE OBJECT ITSELF

*/

class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
    this.score = 0;
  }
  login() {
    console.log(`${this.username} just logged in`);
    return this;
  }
  login() {
    console.log(`${this.username} just logged out`);
    return this;
  }
  incrementScore() {
    this.score += 1;
    console.log(`${this.username} has ${this.score} scores`);
    return this;
  }
}

const userOne = new User("Rasiol", "rasiol@email.com");
userOne.incrementScore().incrementScore().incrementScore();
console.log(userOne);
