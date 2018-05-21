import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Education } from '../models/Education';
import { environment } from '../../environments/environment.prod';
@Injectable()
export class EducationService {

  constructor(
    private _http: HttpClient
  ) { }

  getEducationDocs(): any{
    return this._http.get<Education[]>(`${environment.SERVER_BASE_URL}api/education`)
  }

  saveEducationDoc(doc: Education) {
    this._http.post(`${environment.SERVER_BASE_URL}api/education/saveEducationDoc`, doc)
  }

  updateEducationDoc(doc: Education) {
    this._http.put(`${environment.SERVER_BASE_URL}`, doc)
  }

}
