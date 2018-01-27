'use strict'
export class Person {
   constructor(name, lastName) {
       this.name = name
       this.lastName = lastName
   }

   get Name() {
       return this.name
   }
   set Name(name){
       this.name = name
   }
   get LastName() {
       return this.lastName
   }
   set LastName(lastName) {
       this.lastName = lastName
   }
}