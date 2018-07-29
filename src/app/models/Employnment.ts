export class Employnment {
  constructor(
    public DoYouHaveWork: string,
    public Ocuppation: string,
    public UnemploynmentReason: string,
    public UnemploynmentDate: string,
    public WorkFrecuency: string,
    public WorkFewHours: boolean,
    public WhyWorkFewHours: string,
    public WhyIsItImposible: string,
    public HaveABusiness: boolean,
    public SellProducts: number,
    public Clients: Array<any>,
    public PersonID?: string
  ) {}
}
