/*

// object literals 

const person = {
    fname : 'pranav',
    lname : "sirsufale",
    contact : '8482852301',
    getName : function () {
        console.log(this.fname);
        
    }
}

const p2 = {
    fname : 'Jhon',
    lname : "Doe",
    contact : '8482852301',
    getName : function () {
        console.log(this.fname);
        
    }
}

p2.getName();
*/


// Base Blue print


// function constructor // used pascal casing
/*
function Person(fname,lname,contact){
    this.fname = fname;
    this.lname = lname;
    this.contact = contact;

    this.getName = function(){
        console.log(this.fname, this.lname);
        
    }
}


const perosn1 = new Person('pranav','sirsufale','contact')
const perosn2 = new Person('pooja','sirsufale','contact')
const perosn3 = new Person('pillu','sirsufale','contact')

console.log(perosn1);
console.log(perosn2);
console.log(perosn3);

 */


// After Es6 entroduced class keyword

class Person{
    constructor(fname,lname,contact){
        this.fname = fname;
        this.lname = lname;
        this.contact = contact;


    }

    getName(){
        console.log(this.fname);
        
    }
    getContact(){
        console.log(this.contact);
        
    }
}




const perosn1 = new Person('pranav','sirsufale','contact')
const perosn2 = new Person('pooja','sirsufale','contact')
const perosn3 = new Person('pillu','sirsufale','contact')

perosn1.getName()
perosn2.getName()
console.log(perosn3);




