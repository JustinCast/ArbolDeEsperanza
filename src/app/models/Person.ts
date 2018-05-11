import { HouseMember } from "./HouseMember";
import { Need } from "./Need";
import { PsychoSocial } from "./PsychoSocial";
import { Resolution } from "./Resolution";
import { EmergencyContact } from "./EmergencyContact";
import { Expectatives } from "./Expectatives";
import { Education } from "./Education";
import { SocioEconomic } from "./SocioEconomic";
import { Employnment } from "./Employnment";

export class Person {
    constructor(
        public Name: string,
        public LastName: string,
        public ActiveOrInactive: boolean,
        public EntryDate: Date,
        public BornDate: Date,
        public Age: number,
        public PhoneNumber: string,
        public Email: string,
        public EmergencyContact: EmergencyContact,
        public ReferencedBy: string,
        public DNI: string,
        public Documented: string,
        public Nationality: string,
        public MaritalStatus: string,
        public Residence: string,
        public Expectatives: Expectatives,
        public Education: Education,
        public SocioEconomic: SocioEconomic,
        public Employnment: Employnment,
        public _id?: string
    ) {}
}