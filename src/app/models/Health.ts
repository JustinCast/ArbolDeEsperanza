import { Need } from "./Need";
import { ConsultationReasons } from "./ConsultationReason";
import { Violence } from "./Violence";

export class Health {
    constructor(
        public SocialSecurityType: string,
        public Need: Need,
        public TakeMedication: boolean,
        public Medication: Array<any>,
        public ConsultationReasons: ConsultationReasons,
        public Violence: Violence,
        public AlcoholProblems: boolean,
        public DrugsProblems: boolean,
        public SuicidalAttempts: boolean,
        public SuicidalThoughts: boolean,
        public PersonID?: string
    ){}
}