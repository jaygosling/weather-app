/* eslint-disable eqeqeq */
import { React, useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import logo from '../../logo.svg';
import { Context } from "../store/appContext";


function Home() {
    const {store, actions} = useContext(Context);
    const [citiesList, setCitiesList] = useState(null);
    const [provinceList, setProvinceList] = useState(null);
    const [selectedProvince, setSelectedProvince] = useState(null);
    const [selectedCity, setSelectedCity] = useState(null);

    useEffect(() => {
        const citiesJson = require('../cities.json');
        const provinceJson = require('../provinces.json')
        setCitiesList(citiesJson);
        setProvinceList(provinceJson)
    }, [])

    function checkZip(value) {
        let code = String(value.id_old)
        if (code.indexOf(selectedProvince) == 0) {
            return <option value={String(value.id).slice(2)}>{value.nombre}</option>
        }
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <select className="form-select" aria-label="Default select example" onChange={(e) => setSelectedProvince(String(e.target.value).padStart(2,"0"))}>
                    <option selected value="99">Selecciona Provincia</option>
                    {provinceList ? provinceList.provinces.map((val, i) => <option value={i}>{i != 0 ? String(i).padStart(2, "0") : ""} - {val}</option>) : ""}
                </select>
                <select className="form-select my-3" aria-label="Default select example" onChange={(event) => setSelectedCity(event.target.value)}>
                    <option selected >Selecciona Ciudad</option>
                    {selectedProvince ? citiesList.cities.map((val) => checkZip(val)) : ""}
                </select>
                <Link to={'./city/' + selectedCity}><button className="btn btn-success">Buscar</button></Link>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    )
}

export default Home