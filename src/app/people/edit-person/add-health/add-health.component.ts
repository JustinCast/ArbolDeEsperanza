import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Person } from '../../../models/Person';
import { DataService } from '../../../services/data.service';
import { Health } from '../../../models/Health';
import { Violence } from '../../../models/Violence';
import { ConsultationReasons } from '../../../models/ConsultationReason';
import { Need } from '../../../models/Need';
import { HealthService } from '../../../health.service';

@Component({
  selector: 'app-add-health',
  templateUrl: './add-health.component.html',
  styleUrls: ['./add-health.component.scss']
})
export class AddHealthComponent implements OnInit {
  healthGroup: FormGroup
  person: Person
  health: Health
  constructor(
    private _fb: FormBuilder,
    private data: DataService,
    private healthService: HealthService
  ) { }

  ngOnInit() {
    this.person = JSON.parse(localStorage.getItem('person'))
    this.health = new Health(
          '',
          new Need(
            false,
            false,
            false,
            false,
            false,
            false
          ),
          false,
          [],
          new ConsultationReasons(
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            ''
          ),
          new Violence(
            false,
            false,
            false,
            false,
            false
          ),
          false,
          false,
          false,
          false,
        this.person._id )
    this.healthGroup = this._fb.group({
      'socialSecurityType': ['', Validators.required],
      'need_Doctor': ['', Validators.required],
      'need_Ophthalmologist': ['', Validators.required],
      'need_Mammography': ['', Validators.required],
      'need_Dentist': ['', Validators.required],
      'need_Gynecologist': ['', Validators.required],
      'need_Psychologist': ['', Validators.required],
      'takeMedication': ['', Validators.required],
      'anxiety': ['', Validators.required],
      'depression': [''],
      'lowSelfEsteem': [''],
      'suicidalThoughts': ['', Validators.required],
      'suicidalActions': [''],
      'domesticViolence': [''],
      'difficultyMakingDecision': [''],
      'memoryLoss': [''],
      'learningProblems': [''],
      'deathHandling': [''],
      'angerHandling': [''],
      'eatingDisorders': [''],
      'phobias': [''],
      'sexuality': [''],
      'familyRightsInquiries': [''],
      'sexualDiversity': [''],
      'other': [''],
      'emotional': [''],
      'sexual': [''],
      'patrimonial': [''],
      'economical': [''],
      'physical': [''],
      'alcoholProblems': ['', Validators.required],
      'drugsProblems': ['', Validators.required],
      'suicidalAttempts': ['', Validators.required]
    })
  }

  addMedicine(medicine: string){
    this.health.Medication.unshift(medicine)
  }

  onSubmit(){
    this.healthService.saveHealthDoc(this.health)
  }
  

}
