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
  peopleIntheHouse = [
    "Vive Sola / I live by my selft",
    "De 1 a 4 personas / From 1 to 4",
    "De 4 a 6 personas / From 4 to 6",
    "Más de 6 / More than 6"
  ]
  underagePeople = [
    "Ningún hijo / Any kids",
    "De 1 a 3 hijos / From 1 to 3 kids",
    "Más de 4 / More than 4 "
  ]
  homeServices = [
    "Agua / Water",
    "Electricidad / Electricity",
    "Cable / Wire",
    "Internet / Wifi",
    "Otro"
  ]
  payMan = [
    "Mi pareja  / My partner",
    "Mi pareja y mis hijos / My partner and my kids",
    "Mis hijos  / My kids",
    "Recibo una pensión / I receive a pension",
    "Yo misma  / I do"
  ]
  childrenHelp = [
    "Pura Vida Missions ",
    "Beca escolar",
    "FSM",
    "Umbao"
  ]
  institutionsHelp = [
    "IMAS",
    "INAMU",
    "Pura Vida Missions",
    "Caritas",
    "Club de Leones",
    "FSM",
    "MUSADE",
    "Funcavida",
    "Otra"  
  ]
  mainHouseIncome = [
    "Mi pareja / My partner",
    "Mi pareja y mis hijos / My partner and my kids",
    "Mis hijos / My kids ",
    "Recibo una pensión / I receive a pension",
    "Yo misma / I do",
    "Recibo un subsidio gubernamental / I receive a guvernamental stipend",
    "Recibo un subsidio no gubernamental / I receive a non guvernamental stipend"
  ]
  montlyIncome = [
    "0 a 47 000 (pobreza extrema)",
    "47 000 a 100 000 (pobreza)",
    "100 000 a 350 000",
    "350 000 a 500 000",
    "600 000 en adelante"
  ]
  familyIncome = [
    "350 000 a 450 000",
    "500 000 a 900 000",
    "100 000 000 a 1 500 000",
    "200 000 000 en adelante"
  ]
  houseHolding = [
    "Alquilada / Rented",
    "Propia / Own",
    "Prestada / Borrowed",
    "Ocupada Ilegalmente / Illegally occupied"
  ]
  houseCondition = [
    "En buenas condiciones/ In good conditions",
    "Parcialmente en buenas condiciones/ Partly in good condition",
    "En malas condiciones /In bad conditions",
    "En muy malas condiciones In very bad conditions"
  ]
  constructor() { }

}
