import { Budget } from "./Budget";

export class SocioEconomic {
    constructor(
        public PeopleInTheHouse: number,
        public UnderagePeople: number,
        public HomeServices: Array<any>,
        public Payman: string,
        public ChildrenHelp: Array<any>,
        public InstitutionsHelp: Array<any>,
        public MainHouseProvider: string,
        public MonthlyIncome: number,
        public FamilyIncome: number,
        public Budget: Budget,
        public HouseHolding: string,
        public PersonID: string
    ) {}
}