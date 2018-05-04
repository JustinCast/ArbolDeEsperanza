import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  public district = [
    "San Ramón",
    "Santiago",
    "San Juan",
    "Piedades Norte",
    "Piedades Sur",
    "San Rafael",
    "San Isidro",
    "Ángeles",
    "Alfaro",
    "Volio",
    "Concepción",
    "Zapotal",
    "Peñas Blancas",
    "San Lorenzo"

  ]
  referecedBy = [
    "Gobierno",
    "Organización no Gubernamental",
    "Familia o Amigo",
    "Anuncio"
  ]
  documentedI = [
    "Si",
    "No",
    "N/A"
  ]
  nationality = [
    "Costarricense",
    "Nicaragüense",
    "Salvadoreño",
    "Colombiano",
    "Otro"
  ]
  mStatus = [
    "Soltera",
    "Casada",
    "Divorciada",
    "Viuda",
    "Relación"
  ]
  constructor() { }

}
