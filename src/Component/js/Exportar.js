import React, { Component } from 'react';

export default class Exportar extends Component {


    render() {
        /* const existeError = this.state.error; */
        return (
            <div className="Exportar">
                <tr>
                    <td> <button type="submit" className="btn btn-success w-100">Exportar PDF</button></td>
                    <td> <button type="submit" className="btn btn-success w-100">Exportar JPG</button></td>
                    <td>   <button type="submit" className="btn btn-success w-100">Exportar EXCEL</button></td>
                </tr>
                


            </div>
        );
    }
}

