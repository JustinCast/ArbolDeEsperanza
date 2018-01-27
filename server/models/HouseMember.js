'use strict'
export class HouseMember {
   constructor(name, lastName, clientRelationship, age, occupation, organizationState) {
       this.name = name
       this.lastName = lastName
       this.clientRelationship = clientRelationship
       this.age = age
       this.occupation = occupation
       this.organizationState = organizationState
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
   get ClientRelationship() {
       return this.clientRelationship
   }
   set ClientRelationship(clientRelationship) {
       this.clientRelationship
   }
   get Age() {
       return this.age
   }
   set Age(age) {
       this.age = age
   }
   get Occupation() {
       return this.occupation
   }
   set Occupation(occupation) {
       this.occupation = occupation
   }
   get OrganizationState() {
       return this.organizationState
   }
   set OrganizationState(organizationState) {
       this.organizationState = organizationState
   }
}