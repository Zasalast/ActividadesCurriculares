    <BrowserRouter>
              <div className="contenedor">
            
                <Switch>
                  <Route
                    exact
                    path="/actividades"
                    render={() => (
                      <div>
                   
      
                        <Listas
                          actividades={resultadoBusqueda}
                          busquedaActividad={this.busquedaActividad}
                          eliminarActividad={this.eliminarActividad}
                        />
                      </div>
                    )}
                  />
      
                  <Route
                    exact
                    path="/editar/:actividadId"
                    render={props => {
                      let idActividad = props.location.pathname.replace(
                        "/editar/",
                        ""
                      );
      
                      const actividades = this.state.actividad;
      
                      let filtro;
                      filtro = actividades.filter(
                        actividad => actividad.id === Number(idActividad)
                      );
                      return (
                        <EditarActividad
                          actividad={filtro[0]}
                          editarActividad={this.editarActividad}
                        />
                      );
                    }}
                  />
      
                  <Route
                    exact
                    path="/"
                    render={() => (
                     
                      <div className="row">
                        <div className="col-md-6">
                          <AgregarActividad crearActividad={this.crearActividad} />
                        </div>
                        <div className="col-md-6">
                          <Listas
                            actividades={resultadoBusqueda}
                            eliminarActividad={this.eliminarActividad}
                            busquedaActividad={this.busquedaActividad}
                          />
                        </div>
                      </div>
                    )}
                  />
      
                  <Route path="/nosotros" component={Nosotros} />
                  <Route path="/registar" component={Registar} />
      
                  <Route path="/contacto" component={Contacto} />
                  <Route path="/iniciosesion" component={IniciarSesion} />
      
                  <Route
                    exact
                    path="/actividad/:actividadId"
                    render={props => {
                      let idActividad = props.location.pathname.replace(
                        "/actividad/",
                        ""
                      );
                      const actividades = this.state.actividades;
      
                      let filtro;
                      filtro = actividades.filter(
                        activid => activid.id === Number(idActividad)
                      );
      
                   
                      return <SingleActividad actividad={filtro[0]} />;
                    }}
                  />
      
                </Switch>
              </div>
            </BrowserRouter>
