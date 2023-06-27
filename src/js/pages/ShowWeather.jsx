import { React, useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import SideBar from "./SideBar";
import WeatherCard from "../component/WeatherCard";



function ShowWeather() {
    const {store, actions} = useContext(Context)
    const parametro = useParams();

    useEffect(() => {
        console.log("weatherData está así:", store.weatherData);
    }, [])

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-3 weather-sidebar">
                    <SideBar />
                </div>
                <div className="col-9">
                    <div className="row">
                    {store.weatherData.map((val, ind)=>{
                        return <WeatherCard weather={val} index={ind}/>
                    })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowWeather