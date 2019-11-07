import React, { Component } from 'react';

export default class Exportar extends Component {


    render() {
        /* const existeError = this.state.error; */
        return (
            <div className="Exportar">
                <div className="form-group row justify-content-end">
                 {/*    <div className="class-name"> */}
                       
                        {/* <div className="col-sm-12"> */}
                        {/* <div className="form-group row flex-start"> */}
                            <button type="submit" className="btn btn-success w-100">Exportar PDF</button>

                       {/*  </div> */}
                      {/*   <div className="form-group row justify-content-end"> */}
                            <button type="submit" className="btn btn-success w-100">Exportar JPG</button>


                        {/* </div> */}
                        {/* <div className="form-group row justify-content-end"> */}
                            <button type="submit" className="btn btn-success w-100">Exportar EXCEL</button>

                       {/*  </div> */}

                        {/* /div>  */} {/* </div> */}

                 </div> 


            </div>
        );
    }
}

