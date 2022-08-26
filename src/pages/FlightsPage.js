
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFlightArr1, getFlightAsync, addFlightAsync, updateFlightAsync, deleteFlightAsync } from '../features/flight/flightSlice';
import './style.css'
import FlightsBasicTable from '../components/FlightsBasicTable';


import Button from '@mui/material/Button';


import CustomizedDialogs from '../components/BootstrapDialog1';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Counter1 from '../components/Counter1';
import CustomizedDialogs2 from '../components/BootstrapDialog2';
import CheckboxLabels from '../components/CheckboxLabels';
import RangeSlider from '../components/RangeSlider';



const FlightsPage = () => {
  // let flightArr1 = useSelector(selectFlightArr1);
  let flightArr1 = [{
    "id": 3,
    "origin_country_id": "israel",
    "destination_country_id": "USA",
  }, {
    "id": 4,
    "origin_country_id": "israel",
    "destination_country_id": "USA",
  }, {
    "id": 5,
    "origin_country_id": "israel",
    "destination_country_id": "USA",
  },]


  const dispatch = useDispatch();

  const [startDate, setStartDate] = useState(new Date());
  // -------------------------------------- - dialog - ---------------------------------------------
  const [showOriginPopUp, setShowOriginPopUp] = useState(false)
  const [datePopUp, setDatePopUp] = useState(false)
  const [showDestinationPopUp, setShowDestinationPopUp] = useState(false)
  // -------------------------------------- - useStates - ---------------------------------------------
  const [companyName, setCompanyName] = useState("")
  const [destination, setDestination] = useState("")
  const [search, setSearch] = useState("")
  const [searchCompany, setSearChcompany] = useState("")
  let flightsA = flightArr1.filter((f) => (f.destination_country_id.includes(search) && f.origin_country_id.includes(searchCompany)))
  // -------------------------------------- - useEffect-for-flightArr1 - ------------------------------
  useEffect(() => {
    dispatch(getFlightAsync())
  }, [])
  // ----------------------------------------------------------------------------------------------------------
  console.log(flightsA)

  const options = [
    { value: 1, label: 'Israel' },
    { value: 2, label: 'spain' },
    { value: 3, label: 'brazil' }
  ]
  const style = {
    // backgroundImage: `url("https://thumbs.dreamstime.com/b/emblematic-elements-city-template-vector-icon-building-urban-art-tel-aviv-israel-asia-flat-shadow-design-skyline-105766118.jpg")`,
    width: "280px",
    height: "180px",
    fontSize: "1.4rem",
    backgroundRepeat: 'no-repeat',
    backgroundSize: '280px 180px'
  }
  return (
    <div>
      <h1>Flights Tickets Order</h1>
      <Counter1 />

      <h2>Date Picker</h2>
      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}
        isClearable minDate={new Date()} dateFormat='dd/MM/yyyy' />
      <div>
        <Button onClick={() => setShowOriginPopUp(!showOriginPopUp)} className='dd' style={style} variant="outlined" >from origin</Button>
        {showOriginPopUp && <CustomizedDialogs />}
        <Button onClick={() => setShowDestinationPopUp(!showDestinationPopUp)} className='dd' style={style} variant="outlined">to destenation</Button>
        {showDestinationPopUp && <CustomizedDialogs />}
        <Button onClick={() => setDatePopUp(!datePopUp)} className='dd' style={style} variant="outlined">choose Date</Button>
        {datePopUp && <CustomizedDialogs2 />}
      </div>
      <h4>each one of them open dialog/ popup</h4>
      <br></br>
      {/* <CustomizedDialogs></CustomizedDialogs> */}
      {/* <div style={{ backgroundColor: "cyan" }}>
        companyName: <input onChange={(e) => setCompanyName(e.target.value)}></input>
        destination: <input onChange={(e) => setDestination(e.target.value)}></input>
        <button onClick={() => dispatch(addFlightAsync({ companyName: companyName, destination: destination }))}>Add Flight</button>
        <hr></hr>
        Search by companyName: <input onChange={(e) => (setSearChcompany(e.target.value))} />
        <br></br>
        Search by destination: <input onChange={(e) => (setSearch(e.target.value))} />
      </div> */}

      <CheckboxLabels/>
      <RangeSlider/>

      <Button variant="outlined" size="large">Start Search</Button><br></br>


      {/* <button onClick={() => dispatch(getFlightAsync())}>get flight</button> //we use useEffect insted a button */}
      flightArr1-length: {flightArr1.length}
      {/* // using filter FOR SEARCH: */}

      <FlightsBasicTable FlightCardProps={flightsA} />

    </div >
  )
}

export default FlightsPage