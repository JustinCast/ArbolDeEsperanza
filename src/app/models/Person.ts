import { HouseMember } from "./HouseMember";
import { Need } from "./Need";
import { PsychoSocial } from "./PsychoSocial";

export class Person {
    constructor(
        public Name: string,
        public LastName: string,
        public Reference: string,
        public Documented: string,
        public MaritalStatus: string,
        public EntryDate: Date,
        public ActiveOrInactive: boolean,
        public Age: number,
        public BornDate: Date,
        public Read: boolean,
        public Write: boolean,
        public SocialSecurity: boolean,
        public SocialSecurityType: string,
        public Education: string,
        public Nationality: string,
        public PhoneNumber: string,
        public Address: string,
        public Email: string,
        public Need: Need,
        public PsychoSocial: PsychoSocial,
        public TakeMedication: boolean,
        public Medication: Array<string>,
        public EmploymentSituation: string,
        public WorkingHours: number,
        public UnemployedDate: string,
        public SupportInstitutions: Array<string>,
        public PersonsInTheHouse: number,
        public UnderagePeople: number,
        public DisabilitiePersons: number,
        public HouseIncome: number,
        public IncomeSource: string,
        public HouseHolding: string,
        public HouseCondition: string,
        public HouseMembers: Array<HouseMember>,
        public Resolutions: Array<any>,
        public _id?: string
    ) {}
}