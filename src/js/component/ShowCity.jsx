import { React, useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";


function ShowCity() {
    const {store, actions} = useContext(Context)
    const parametro = useParams();
    const colWidth = 'col-2';
    const firstColWidth = 'col-4';
    useEffect(() => {
        actions.getWeatherInfo(parametro.id);
    }, [])

    /*function setIcon(id) {
     * Quizás poner una función para cambiar los iconos del tiempo?
    }*/
    return (
        <div className="container-fluid mt-3 show-city-main">
            <div className="row text-center">
                <h1>El tiempo en {store.weatherData[0]?.nombre}</h1>
            </div>
            <div className="row justify-content-center mt-4">
                <div className="col-6">
                    <div className="row mt-3">
                        <div className={firstColWidth}>Horas</div>
                        <div className={colWidth}>0 - 6</div>
                        <div className={colWidth}>6 - 12</div>
                        <div className={colWidth}>12 - 18</div>
                        <div className={colWidth}>18 - 24</div>
                    </div>
                    <div className="row">
                        <div className={firstColWidth}>Probabilidad de precipitación</div>
                        {store.weatherData[0]?.prediccion?.dia[0].probPrecipitacion.map((val, i) => i > 2 ? <div className={colWidth}>{val.value} %</div> : "")}
                    </div>
                    <div className="row">
                        <div className={firstColWidth}>Estado del cielo</div>
                        {store.weatherData[0]?.prediccion?.dia[0].estadoCielo.map((val, i) => i > 2 ? <div className={colWidth}>{val.value ? (<img src={'https://www.aemet.es/imagenes/png/estado_cielo/' + val.value + '.png'}></img>) : ""}<br></br>{val.descripcion}</div> : "")}
                    </div>
                    <div className="row">
                        <div className={firstColWidth}>Dirección del viento y velocidad</div>
                        {store.weatherData[0]?.prediccion?.dia[0].viento.map((val, i) => i > 2 ? <div className={colWidth}><img src={'https://www.aemet.es/imagenes_gcd/_iconos_municipios/'+val.direccion+'.png'}></img><br></br>{val.velocidad} km/h</div> : "")}
                    </div>
                    <div className="row">
                        <div className={firstColWidth}>Temperatura</div>
                        {store.weatherData[0]?.prediccion?.dia[0].temperatura.dato.map((val, i) => <div className={colWidth}>{val.value}ºC</div>)}
                    </div>
                    <div className="row">
                        <div className={firstColWidth}>Sensación Térmica</div>
                        {store.weatherData[0]?.prediccion?.dia[0].sensTermica.dato.map((val, i) => <div className={colWidth}>{val.value}ºC</div>)}
                    </div>
                    <div className="row">
                        <div className={firstColWidth}>Humedad Relativa</div>
                        {store.weatherData[0]?.prediccion?.dia[0].humedadRelativa.dato.map((val, i) => <div className={colWidth}>{val.value}%</div>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowCity