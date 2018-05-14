export class ConsultationReasons{
    constructor(
        public Anxiety: boolean,
        public Depression: boolean,
        public LowSelfEsteem: boolean,
        public SuicidalThoughts: boolean,
        public SuicidalActions: boolean,
        public DomesticViolence: boolean,
        public DifficultyMakingDecision: boolean,
        public MemoryLoss: boolean,
        public LearningProblems: boolean,
        public DeathHandling: boolean,
        public AngerHandling: boolean,
        public EatingDisorders: boolean,
        public Phobias: Array<any>,
        public Sexuality: boolean,
        public FamilyRightsInquiries: boolean,
        public SexualDiversity: boolean,
        public Other: string
    ){}
}