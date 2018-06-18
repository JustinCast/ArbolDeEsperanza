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
  public referecedBy = [
    "Gobierno",
    "Organización no Gubernamental",
    "Familia o Amigo",
    "Anuncio"
  ]
  public documentedI = [
    "Si",
    "No",
    "N/A"
  ]
  public nationality = [
    "Costarricense",
    "Nicaragüense",
    "Salvadoreño",
    "Colombiano",
    "Otro"
  ]
  public mStatus = [
    "Soltera",
    "Casada",
    "Divorciada",
    "Viuda",
    "Relación"
  ]
  public hearAboutWay = [
    "Me contó una persona conocida / A friend",
    "Lo vi en Facebook / Facebook page",
    "Lo escuché en una actividad a la que asistí / I attended to an activity",
    "Referencia de una organización / Organization reference",    
  ]
  public whatYouKnow = [
    "Dar cursos / To get training",
    "Dar trabajo / To provide jobs",
    "Dar diarios / To provide food",
    "Terapia / To get therapy",
    "Programa de Salud Mental y de Desarrollo de Habilidades para el Trabajo / Combination of Mental program and WFS program",
    "Otro"
  ]
  public entryReason = [
    "Necesito ayuda económica",
    "Necesito asesoría legal",
    "Necesito terapia psicológica o Trabajo Social",
    "Quiero encontrar un trabajo",
    "No me gusta estar sola en mi casa",
    "Opción que combina Salud Mental y WFS/ Option that combines Mental Health program and WFS program",
    "Otra…"
  ]
  public read = [
    "Sabe leer y escribir",
    "No sabe leer y escribir" 
  ]
  public education = [
    "Primaria completa / Elementary School Diploma",
    "Primaria incompleta / Elementary School Incomplete",
    "Secundaria completa / High School Diploma",
    "Educación secundaria en progreso / High School in Process",
    "Técnico completo / Vocational Diploma"
  ]
  public peopleInTheHouse = [
    "Vive Sola / I live by my selft",
    "De 1 a 4 personas / From 1 to 4",
    "De 4 a 6 personas / From 4 to 6",
    "Más de 6 / More than 6"
  ]
  public underagePeople = [
    "Ningún hijo / Any kids",
    "De 1 a 3 hijos / From 1 to 3 kids",
    "Más de 4 / More than 4 "
  ]
  public homeServices = [
    "Agua / Water",
    "Electricidad / Electricity",
    "Cable / Wire",
    "Internet / Wifi",
    "Otro"
  ]
  public payMan = [
    "Mi pareja  / My partner",
    "Mi pareja y mis hijos / My partner and my kids",
    "Mis hijos  / My kids",
    "Recibo una pensión / I receive a pension",
    "Yo misma  / I do"
  ]
  public childrenHelp = [
    "Pura Vida Missions ",
    "Beca escolar",
    "FSM",
    "Umbao"
  ]
  public institutionsHelp = [
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
  public mainHouseIncome = [
    "Mi pareja / My partner",
    "Mi pareja y mis hijos / My partner and my kids",
    "Mis hijos / My kids ",
    "Recibo una pensión / I receive a pension",
    "Yo misma / I do",
    "Recibo un subsidio gubernamental / I receive a guvernamental stipend",
    "Recibo un subsidio no gubernamental / I receive a non guvernamental stipend"
  ]
  public montlyIncome = [
    "0 a 47 000 (pobreza extrema)",
    "47 000 a 100 000 (pobreza)",
    "100 000 a 350 000",
    "350 000 a 500 000",
    "600 000 en adelante"
  ]
  public familyIncome = [
    "350 000 a 450 000",
    "500 000 a 900 000",
    "100 000 000 a 1 500 000",
    "200 000 000 en adelante"
  ]
  public houseHolding = [
    "Alquilada / Rented",
    "Propia / Own",
    "Prestada / Borrowed",
    "Ocupada Ilegalmente / Illegally occupied"
  ]
  public houseCondition = [
    "En buenas condiciones/ In good conditions",
    "Parcialmente en buenas condiciones/ Partly in good condition",
    "En malas condiciones /In bad conditions",
    "En muy malas condiciones In very bad conditions"
  ]
  public actuallyWork = [
    "Si / Yes",
    "No",
    "Soy ama de casa y no necesito un trabajo / I'm a housewife and don't need a job ",
  ]
  public occupation = [
    "Brindo servicios domésticos  / I provide housekeeping services",
    "Hago algún producto / I make and sell a product",
    "Cuido de menores / I take care of kids",
    "Cuido de adultos mayores/ I take care of Eldery"
  ]
  public unemploymentReason = [
    "Edad / Age (people don't hire people over 40 years old",
    "Baja escolaridad / I have little education",
    "No he buscado un trabajo pero necesito uno/ I haven't looked for a job, but I need one",
    "No estoy buscando un trabajo / I'm not looking for a job",
    "En los últimos 3 meses, he enviado currículum pero no me han llamado / In the last 3 months, I have sent CVs, but no one has called me yet",
    "Otra…"
  ]
  public unemploynmentDate = [
    "De 1 a 3 meses / From 1 ro 3 months",
    "De 3 a 6 meses / From 3 to 6 months",
    "De 6 meses a 1 año / From 6 months to 1 year",
    "De 1 a 3 años /From 1 to 3 years",
    "De 3 a 5 años / From 3 to 5 years",
    "Más de 5 años /More than 5 years",
    "Otra…"
  ]
  public workFrecuency = [
    "Ocasional (algunas veces al mes) /Ocassionally (a few days a month)",
    "De 2 a 8 horas a la semana / From 2 to 8 hours a week",
    "De 9 a 15 horas a la semana /From 9 to 15 hours a week",
    "Medio tiempo (24 horas a la semana) / Part-time (24 hours per week)",
    "Tiempo completo (48 horas a la semana) / Full time (48 hours a week)",
    "No tengo trabajo, soy ama de casa  / I don't have a job, I'm a housewife",
    "Otra…"
  ]
  public workFewHours = [
    "Si / Yes",
    "No"
  ]
  public whyIsItImposible = [
    "El Mercado laboral no contrata personas de mi edad/ Businesses don't hire people at my age",
    "Motivos de Salud / Health",
    "Cuido de otra personaI / I take care of someone",
    "Labores del hogar / Household workload",
    "El mercado laboral no contrata a personas de mi edad",
    "Mi esposo no me lo permite"
  ]
  public haveABusiness = [
    "Si / Yes",
    "No"
  ]
  public socialSecurityType = [
    "Por el Estado / Government",
    "Voluntario  / Volunteer",
    "No"
  ]
  public takeMedication = [
    "Si / Yes",
    "No"
  ]
  public alcoholProblems = [
    "Si / Yes",
    "No"
  ]
  public drugsProblems = [
    "Si / Yes",
    "No"
  ]
  public suicidalAttempt = [
    "Si / Yes",
    "No"
  ]
  public suicidalThoughts = [
    "Si / Yes",
    "No"
  ]
  constructor() { }

}
