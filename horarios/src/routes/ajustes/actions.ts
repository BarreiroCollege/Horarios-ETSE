import {
  AjustesActionTypes,
  AjustesState,
  CARGAR_ASIGNATURAS,
  NUEVA_ASIGNATURA,
  NUEVA_CLASE,
  NUEVO_GRUPO,
  REASIGNAR_GRUPOS,
} from "./types";
import Asignatura from "models/asignatura";
import {Grupo} from "models/grupo";
import {RootState} from "store/reducer";
import {connect, ConnectedProps} from "react-redux";
import {Clase} from "models/clase";


export function nuevaAsignatura(asignatura: Asignatura): AjustesActionTypes {
  return {
    type: NUEVA_ASIGNATURA,
    payload: {asignatura}
  }
}

export function cargarAsignaturas(asignaturas: Asignatura[]): AjustesActionTypes {
  return {
    type: CARGAR_ASIGNATURAS,
    payload: {asignaturas}
  }
}

export function nuevaClase(clase: Clase): AjustesActionTypes {
  return {
    type: NUEVA_CLASE,
    payload: {clase}
  }
}

export function nuevoGrupo(grupo: Grupo): AjustesActionTypes {
  return {
    type: NUEVO_GRUPO,
    payload: {grupo}
  }
}

export function reasignarGrupos(): AjustesActionTypes {
  return {
    type: REASIGNAR_GRUPOS
  }
}


const mapState = (state: RootState): AjustesState => ({
  asignaturas: state.ajustes.asignaturas,
  grupos: state.ajustes.grupos,
  matricula: state.ajustes.matricula
});

const mapDispatch = {
  nuevaAsignatura: nuevaAsignatura,
  cargarAsignaturas: cargarAsignaturas,
  nuevaClase: nuevaClase,
  nuevoGrupo: nuevoGrupo,
  reasignarGrupos: reasignarGrupos
}

export const CONNECTOR = connect(mapState, mapDispatch);
export type PropsFromRedux = ConnectedProps<typeof CONNECTOR>;
