
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';


function Weather(){
    let [city, setcity] = useState("");
    let [result, setresult]= useState({});
    const URL ="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY ="31939fce8f311102986033ffdb207ecf";

    let getweatherinfo = async() =>{
        let response = await fetch(`${URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
    //  console.log(jsonResponse);
        setresult({
    temperature: jsonResponse.main.temp,
    humidity: jsonResponse.main.humidity
});

    }
    let handleChange = (event) =>{
        setcity(event.target.value);
    }
    let handleSubmit=(event)=>{
        event.preventDefault();
        console.log(city)
       
        getweatherinfo();
        setcity("");
    }
    return(
        <div>
            <form onSubmit={handleSubmit} >
        <h1> Weather App</h1>
            <TextField id="city" 
            label="Enter city" 
            variant="outlined" 
            value={city}
            onChange={handleChange}
            required/>

            <br></br><br></br>
            <Button type='submit'
             variant="contained"
             size="medium">
          Search
        </Button>
        <p>Weather: {result.temperature}</p>
        </form>
        </div>
    )
}

export default Weather