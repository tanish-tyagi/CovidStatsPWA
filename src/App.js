import React, {useState} from "react";


import "./app.css";
import cTotal from "./api/fetchData.js";
//import cTimeline from "./api/fetchTimeline.js";

const App = ()=>{
    const[query, setQuery] = useState('');
    const[countryData, setData] = useState({});

    const search = async(e)=>{
        if(e.key === 'Enter'){
            const data = await cTotal(query);
            if(data.data.countrydata){
                setData(data);
            }else{
                alert('Please Enter Valid Country Code');
            }
            setQuery('');
        }
    }

    return (
        <div className="main-container">
            <div className='heading'><h1>CORONA UPDATES</h1></div> 
            <input
                type = 'text' className = 'search' placeholder = 'Country Code (Ex- IN)' value = {query} onChange = {(e)=>setQuery(e.target.value)} onKeyPress = {search}
            />
            { countryData.status && countryData.data.countrydata[0] && (
                <div className='country'>
                    <h2>
                        <span>{countryData.data.countrydata[0].info.title}</span>
                    </h2>
                    <table border='1'>
                        <tbody>
                            <tr>
                                <th>Total Cases - </th>
                                <td>{countryData.data.countrydata[0].total_cases}</td>
                            </tr>
                            <tr>
                                <th>Total Deaths - </th>
                                <td>{countryData.data.countrydata[0].total_deaths}</td>
                            </tr>
                            <tr>
                                <th>Total Recovered - </th>
                                <td>{countryData.data.countrydata[0].total_recovered}</td>
                            </tr>
                            <tr>
                                <th>Danger Rank - </th>
                                <td>{countryData.data.countrydata[0].total_danger_rank}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
            <div><span color="#ffffff">By Tanish Tyagi</span></div>
        </div>  
    );
}

export default App;