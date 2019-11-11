import { combineReducers,createStore } from 'redux';
import  actividadesReducer  from "../reducers/actividadesReducer";
export default combineReducers({ actividades: actividadesReducer });