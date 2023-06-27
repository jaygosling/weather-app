import axios from "axios";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
            apiKey: "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkZXNhcnJvbGxvQGVjaWdsb2dpc3RpY2EuY29tIiwianRpIjoiZjI5NzA2ZGMtODJhYS00OGVjLWI3YTgtNDQ2OWFkZGRjZjMxIiwiaXNzIjoiQUVNRVQiLCJpYXQiOjE2ODY2NDI0MDAsInVzZXJJZCI6ImYyOTcwNmRjLTgyYWEtNDhlYy1iN2E4LTQ0NjlhZGRkY2YzMSIsInJvbGUiOiIifQ.vAGiVXlSXufaVi8EyWxlVk9mUh7ol9d4zvuubD1Hl-E",
            weatherData: [],
            apiBaseUrl: "https://opendata.aemet.es/opendata/api",
            predEspecifica: "/prediccion/especifica",
		},
		actions: {
			// Use getActions to call a function within a fuction
            getWeatherInfo: (id) => {
                const store = getStore();
                console.log(id, store.apiBaseUrl+store.predEspecifica+'/municipio/diaria/' + id + '?api_key=' + store.apiKey)
                axios.get(store.apiBaseUrl+store.predEspecifica+'/municipio/diaria/' + id + '?api_key=' + store.apiKey)
                    .then((response) => response.data)
                    .then((url) => axios.get(url.datos))
                    .then((response) => {
                        setStore({weatherData: [...store.weatherData, response.data[0]]})
                        console.log(response.data)
                        console.log("Store: ", store.weatherData)
                        return response
                    })
            },
            deleteCard: (i) => {
                const store = getStore();
                setStore({weatherData: store.weatherData.splice(i-1,1)})
            }
		}
	};
};

export default getState;