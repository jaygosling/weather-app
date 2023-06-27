import { React, useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";


function WeatherCard(props) {
    const { store, actions } = useContext(Context)
    const parametro = useParams();

    /*useEffect(() => {
        actions.getWeatherInfo(parametro.id);
    }, [])*/

    function getTemperature() {
        var timeNow = new Date();
        var hourNow = timeNow.getHours();
        console.log("prop.key", props?.index)
        console.log("prop.values", props?.weather)
        if (hourNow >= 6) {
            return props?.weather?.prediccion?.dia[0].temperatura.dato[0].value
        } else if (hourNow >= 12) {
            return props?.weather?.prediccion?.dia[0].temperatura.dato[1].value
        } else if (hourNow >= 18) {
            return props?.weather?.prediccion?.dia[0].temperatura.dato[2].value
        } else {
            return props?.weather?.prediccion?.dia[0].temperatura.dato[3].value
        }
    }

    function getPic() {
        var timeNow = new Date();
        var hourNow = timeNow.getHours();
        var pic = ""
        if (hourNow <= 6) {
            pic = props?.weather?.prediccion?.dia[0].estadoCielo[3].value
        } else if (hourNow <= 12) {
            pic = props?.weather?.prediccion?.dia[0].estadoCielo[4].value
        } else if (hourNow <= 18) {
            pic = props?.weather?.prediccion?.dia[0].estadoCielo[5].value
        } else {
            pic = props?.weather?.prediccion?.dia[0].estadoCielo[6].value
        }
        return "https://www.aemet.es/imagenes/png/estado_cielo/" + pic + ".png"
    }

    return (
        <div className="d-flex justify-content-center mt-2" key={props.index}>
            <div className="card col-8 bg-success">
                <div className="card-body row py-0 px-3">
                    <div className="col-4 text-center border-end vertical-center">
                        <h5 className="card-title ciudad">{props?.weather?.nombre}</h5>
                        <img src={getPic()} />
                        <p className="card-text text-center"><span className="temperatura-big">{getTemperature()}º</span></p>
                    </div>
                    <div className="col-2 border-end">
                        <p className="m-0 text-center">Hoy</p>
                        <p className="text-center m-0"><span className="temperatura-big">{props?.weather?.prediccion.dia[0].temperatura.maxima}º</span><br /><span className="subtitulo-temperatura">max</span></p>
                        <p className="text-center m-0"><span className="temperatura-big">{props?.weather?.prediccion.dia[0].temperatura.minima}º</span><br /><span className="subtitulo-temperatura">min</span></p>
                    </div>
                    <div className="col-6">

                    </div>
                </div>
            </div>
            <i class="fas fa-circle-xmark close-icon" onClick={()=>{actions.deleteCard(props?.index)}}></i>
        </div>
    )
}

export default WeatherCard