class Key {
    private signature: number;
    constructor() {
        this.signature = Math.random();
    }
    getSignature() {
        return this.signature;
    }
}
class Person {
    private key: Key;
    constructor(key: Key) {
        this.key = key;
    }
    getKey() {
        return this.key;
    }
}

abstract class House {
    protected door: boolean;
    protected key: Key;
    protected tenants: Person[] = [];

    constructor(key: Key) {
        this.door = false;
        this.key = key;
    }
      abstract openDoor(key: Key): void;

    comeIn(person:Person): void {
        if (this.door) {
            this.tenants.push(person)
                  console.log('Person entered the house.');

        }
              console.log('The door is closed. Cannot enter.');

    }
}
class MyHouse extends House {
  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log('Door opened.');
    } else {
      console.log('Wrong key. Door remains closed.');
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};