import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import { AgregarActividad,BorrarActividad,ObtenerActividades} from './Component/Datos/actions/actividadesActions';
import {  AGREGAR_ACTIVIDAD,BORRAR_ACTIVIDAD,MOSTRAR_ACTIVIDADES} from './Component/Datos/actions/types';
// importar reduces
import reducerPrincipal from './Component/Datos/reducers';
const initialState ={
    actividades:[]
};
const middleware =[thunk];
const store =createStore(reducerPrincipal,initialState,compose(applyMiddleware(...middleware),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));
store.dispatch({type:'AGREGAR_ACTIVIDAD', "id": 1,
"actividadcurricular": "1Trabajo final",
"encargado": "2oscar patino",
"descripcion": "3kui",
"fecha": "42019-01-01",
"hora": "500:00"})
store.dispatch({type:'AGREGAR_ACTIVIDAD', "id": 1,
"actividadcurricular": "2Trabajo final",
"encargado": "2oscar patino",
"descripcion": "2kui",
"fecha": "2019-01-01",
"hora": "01:00"})
export default store;