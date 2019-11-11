import {AGREGAR_ACTIVIDAD,BORRAR_ACTIVIDAD,MOSTRAR_ACTIVIDADES} from './types';

export const ObtenerActividades = ()=>{
    return{
        type:MOSTRAR_ACTIVIDADES
    }
}

export const BorrarActividad = ()=>{
    return{
        type:BORRAR_ACTIVIDAD
        
    }
}

export const AgregarActividad = ()=>{
    return{
        type:AGREGAR_ACTIVIDAD,  
        "id": 1,
        "actividadcurricular": "Trabajo final",
        "encargado": "oscar patino",
        "descripcion": "kui",
        "fecha": "2019-01-01",
        "hora": "00:00"
    }
}