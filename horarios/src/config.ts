export const SPREADSHEET_ID = "1ySowTcnclpi11A4Vu3QbTS4FpMwj-CI3qKSi9JR_4EI";

export enum BD {
  ASIGNATURAS = "ASIGNATURAS",
    ASIGNATURAS__CODIGO = "A",
    ASIGNATURAS__NOMBRE = "B",
    ASIGNATURAS__ABREVIATURA = "C",
    ASIGNATURAS__PERIODO = "D",

  CLASES = "CLASES",
    CLASES__ASIGNATURA = "A",
    CLASES__DIA = "B",
    CLASES__INICIO = "C",
    CLASES__FIN = "D",
    CLASES__AULA = "E",
    CLASES__TIPO = "F",
    CLASES__GRUPO = "G",

  PERIODOS = "PERIODOS",
    PERIODOS__ASIGNATURA = "A",
    PERIODOS__TIPO = "B",
    PERIODOS__INICIO = "C",
    PERIODOS__FIN = "D",

  FESTIVOS = "FESTIVOS",
    FESTIVOS__ASIGNATURA = "A",
    FESTIVOS__TIPO = "B",
    FESTIVOS__DIA = "C",

  GRUPOS = "GRUPOS",
    GRUPOS__ASIGNATURA = "A",
    GRUPOS__TIPO = "B",
    GRUPOS__GRUPO = "C",
    GRUPOS__ROTACION = "D",
    GRUPOS__INICIO = "E",
    GRUPOS__FIN = "F",
}

export const LOCALSTORAGE_KEY = 'horario';

export const HORAS_LABORABLES = [
  {inicio: '09:00', fin: '14:30'},
  {inicio: '15:00', fin: '20:30'}
];
