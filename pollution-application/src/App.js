import React from 'react';
import './styles/App.css';
import Main from "./Info/Main"
import Tips from "./Tips"
import moment from 'moment'; 


function App() {
  var now = moment().format("MMM Do YYYY");
  return (
    <div className="App">
        <Main
            Date = {now}
            City = "London"
        />
        <Tips aqi = "160" tip1 = "Stay Indoors" tip2 = "Wear a Mask" tip3 = "Keep Activity Level Low" tip4 = "Use an Air Filter" />
    </div>
  );
}

export default App;
