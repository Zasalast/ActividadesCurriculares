import React,{Component} from 'react';
import firebase from 'firebase';
export default class CargarBasedatos extends Component {
 cargar=()=>{
     const firestore =firebase.firestore();
     firestore.settings({timestampsInSnapshots:true});
     const col = firestore.collection("prueba");
     const query = col.where('items','array-contains','bananas')
    query.get().then(snapshot =>{
        snapshot.docs.forEach(doc=>{
            console.log(doc.id,doc.data())
        })
    })
    } 
    render() {
        return (
            <div className="class-name">
               {this.cargar}
            </div>
        );
    }
}