import {AGREGAR_ACTIVIDAD,MOSTRAR_ACTIVIDADES,BORRAR_ACTIVIDAD} from '../actions/types';

// states inicial, cada reducer debe tener su propio state
const initialState = {
    actividades:[]
}
export default function (state =initialState, action) {
    console.log( '   inicial state'+initialState);
    switch (action.type) {
        case MOSTRAR_ACTIVIDADES:
            return {
                ...state, 
                    "id": 1,
                    "actividadcurricular": "1Trabajo final",
                    "encargado": "2oscar patino",
                    "descripcion": "3kui",
                    "fecha": "42019-01-01",
                    "hora": "500:00"
                
            }
            
            case AGREGAR_ACTIVIDAD:
            return {
                ...state
            }
               
                case BORRAR_ACTIVIDAD:
                    return {
                        ...state
                    }
                  
    
        default:
                return state;
                
           
    }
}