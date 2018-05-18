import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Person } from '../../../models/Person';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-add-health',
  templateUrl: './add-health.component.html',
  styleUrls: ['./add-health.component.scss']
})
export class AddHealthComponent implements OnInit {
  healthGroup: FormGroup
  person: Person
  constructor(
    private _fb: FormBuilder,
    private data: DataService
  ) { }

  ngOnInit() {
    this.person = JSON.parse(localStorage.getItem('addedInProcess'))
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
      'depression': ['', Validators.required],
      'lowSelfEsteem': ['', Validators.required],
      'suicidalThoughts': ['', Validators.required],
      'suicidalActions': ['', Validators.required],
      'domesticViolence': ['', Validators.required],
      'difficultyMakingDecision': ['', Validators.required],
      'memoryLoss': ['', Validators.required],
      'learningProblems': ['', Validators.required],
      'deathHandling': ['', Validators.required],
      'angerHandling': ['', Validators.required],
      'eatingDisorders': ['', Validators.required],
      'phobias': ['', Validators.required],
      'sexuality': ['', Validators.required],
      'familyRightsInquiries': ['', Validators.required],
      'sexualDiversity': ['', Validators.required],
      'emotional': ['', Validators.required],
      'sexual': ['', Validators.required],
      'patrimonial': ['', Validators.required],
      'economical': ['', Validators.required],
      'physical': ['', Validators.required],
      'alcoholProblems': ['', Validators.required],
      'drugsProblems': ['', Validators.required],
      'suicidalAttempts': ['', Validators.required]
    })
  }

}
