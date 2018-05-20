class Person {
    constructor(name='Anonymous', age=0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hi. I'm ${this.name}.`
    }

    getDescription() {
        return `${this.name} is ${this.age} years old. `
    }
}

class Student extends Person {
  constructor(name, age, major) {
      super(name, age);
      this.major = major;
  }

  hasMajor() {
      return !!this.major;
  }

  getDescription() {
    let val = super.getDescription();

    if (this.hasMajor()) {
        val += `Their major is ${this.major}. `
    }
    return val;
    //   return (super.getDescription() + (this.hasMajor() ? 'Their major is '+ this.major : ''));
  }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGreeting() {
        return super.getGreeting() + ( (this.homeLocation) ? ` I live in ${this.homeLocation}. ` : '' ); 
    }
}

const me = new Traveler('andrew mead', 99, 'USA');

console.log(me.getGreeting());