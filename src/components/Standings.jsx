import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../style/Standings.css';

const Standings = () => {
  const [data, setData] = useState([]);
  const [selectedLeague, setSelectedLeague] = useState('eng.1');
  const [selectedYear, setSelectedYear]= useState('2021');

  useEffect(() => {
    axios(`https://api-football-standings.azharimm.site/leagues/${selectedLeague}/standings?season=${selectedYear}`)
    .then((response) => {
      console.log(response.data.data.standings)
      setData(response.data.data.standings)
    }).catch(err => console.log(err))
  }, [selectedLeague, selectedYear])

  return (
    <div className='standingsWrapper'>
        <div className='selectContainer'>
        <select
          name="select-league"
          id="select-league"
          defaultValue={selectedLeague}
          onChange={(e) => setSelectedLeague(e.target.value)}
        >
          <option value="arg.1">Argentine Liga Profesional de Fútbol</option>
          <option value="aus.1">Australian A-League</option>
          <option value="bra.1">Brazilian Serie A</option>
          <option value="chn.1">Chinese Super League</option>
          <option value="ned.1">Dutch Eredivisie</option>
          <option value="eng.1">English Premier League</option>
          <option value="fra.1">French Ligue 1</option>
          <option value="ger.1">German Bundesliga</option>
          <option value="idn.1">Indonesian Liga 1</option>
          <option value="ita.1">Italian Serie A</option>
          <option value="jpn.1">Japanese J League</option>
          <option value="mys1">Malaysian Super League</option>
          <option value="mex.1">Mexican Liga BBVA MX</option>
          <option value="por.1">Portuguese Liga</option>
          <option value="rus.1">Russian Premier League</option>
          <option value="sgp.1">Singaporean Premier League</option>
          <option value="esp.1">Spanish Primera División</option>
          <option value="tha.1">Thai Premier League</option>
          <option value="tur.1">Turkish Super Lig</option>
          <option value="uga.1">Ugandan Super League</option>
        </select>
        <select
          name="select-year"
          id="select-year"
          onChange={(e) => setSelectedYear(e.target.value)}
          defaultValue={selectedYear}
        >
          <option value="2011">2011</option>
          <option value="2012">2012</option>
          <option value="2013">2013</option>
          <option value="2014">2014</option>
          <option value="2015">2015</option>
          <option value="2016">2016</option>
          <option value="2017">2017</option>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
        </select>
          <div className='standingResults'>
            {data.map((data, index) => (
              <div key={data.team.id} className='standingInfo'>
                <div className='showName'>
                {`${index+1}.`}
                <img src={data.team.logos[0].href} alt='club'/>
                {data.team.displayName}
                </div>
                <div className='showPoints'>
                {` Games: ${data.stats[3].displayValue}`}
                {` ${data.stats[0].displayName}: ${data.stats[0].displayValue}`}
                {` ${data.stats[2].displayName}: ${data.stats[2].displayValue}`}
                {` ${data.stats[1].displayName}: ${data.stats[1].displayValue}`}
                {` ${data.stats[6].displayName}: ${data.stats[6].displayValue}`}
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default Standings;