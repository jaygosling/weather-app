import { React, useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";


function ShowCity() {
    const {store, actions} = useContext(Context)
    const parametro = useParams();

    useEffect(() => {
        actions.getWeatherInfo(parametro.id);
    }, [])

    /*function setIcon(id) {
     * Quizás poner una función para cambiar los iconos del tiempo?
    }*/
    return (
        <div className="d-flex justify-content-center m-3">
      <div className="card col-6 bg-success">
  <div className="card-body row">
      <div className="col-3 text-center border-end">
      <h5 className="card-title ciudad">Valencia</h5>
          <img src="https://www.aemet.es/imagenes/png/estado_cielo/11_g.png"/>
          <p className="card-text text-center"><span className="temperatura-big">18º</span></p>
      </div>
      <div className="col-2 border-end">
              <p className="m-0 text-center">Hoy</p>
    <p className="text-center m-0"><span className="temperatura-big">18º</span><br/><span className="subtitulo-temperatura">max</span></p>
    <p className="text-center m-0"><span className="temperatura-big">18º</span><br/><span className="subtitulo-temperatura">min</span></p>
      </div>
      <div className="col-6">
          
      </div>
      </div>
  </div>
</div>
    )
}

export default ShowCity