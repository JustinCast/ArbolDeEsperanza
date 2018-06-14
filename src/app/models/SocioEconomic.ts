import { Budget } from "./Budget";

export class SocioEconomic {
    constructor(
        public PeopleInTheHouse: string,
        public UnderagePeople: string,
        public HomeServices: Array<any>,
        public Payman: string,
        public ChildrenHelp: Array<any>,
        public InstitutionsHelp: Array<any>,
        public MainHouseProvider: string,
        public MonthlyIncome: string,
        public FamilyIncome: string,
        public Budget: Budget,
        public HouseHolding: string,
        public HouseCondition: string,
        public PersonID?: string
    ) {}
}