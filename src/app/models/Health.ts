import { Need } from "./Need";
import { ConsultationReasons } from "./ConsultationReason";
import { Violence } from "./Violence";
import { Resolution } from "./Resolution";

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
    public Resolutions: Array<Resolution>,
    public PersonID?: string
  ) {}
}
