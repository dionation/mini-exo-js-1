export class Personne {
    constructor(name, age, sex = "autre", heigh = 170, weight = 70) {
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.heigh = heigh;
        this.weight = weight;
    }

    talk() { }

    sleep() { }

    eat() { }

    run() { }

    weight() { }
}