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
  hearAboutWay = [
    "Me contó una persona conocida / A friend",
    "Lo vi en Facebook / Facebook page",
    "Lo escuché en una actividad a la que asistí / I attended to an activity",
    "Referencia de una organización / Organization reference",    
  ]
  whatYouKnow = [
    "Dar cursos / To get training",
    "Dar trabajo / To provide jobs",
    "Dar diarios / To provide food",
    "Terapia / To get therapy",
    "Programa de Salud Mental y de Desarrollo de Habilidades para el Trabajo / Combination of Mental program and WFS program",
    "Otro"
  ]
  entryReason = [
    "Necesito ayuda económica",
    "Necesito asesoría legal",
    "Necesito terapia psicológica o Trabajo Social",
    "Quiero encontrar un trabajo",
    "No me gusta estar sola en mi casa",
    "Opción que combina Salud Mental y WFS/ Option that combines Mental Health program and WFS program",
    "Otra…"
  ]
  read = [
    "Sabe leer y escribir",
    "No sabe leer y escribir" 
  ]
  education = [
    "Primaria completa / Elementary School Diploma",
    "Primaria incompleta / Elementary School Incomplete",
    "Secundaria completa / High School Diploma",
    "Educación secundaria en progreso / High School in Process",
    "Técnico completo / Vocational Diploma"
  ]
  constructor() { }

}
