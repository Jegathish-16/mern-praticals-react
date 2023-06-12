import React, { Component } from 'react'
import axios from 'axios'
// import './HolidayComponent.css'
export class HolidayComponent extends Component {
    constructor(){
        super()
        this.state = {
            holidays: [],
            errorMessage: ''
          };
    }
    componentDidMount() {
        axios
          .get('https://date.nager.at/api/v3/PublicHolidays/2023/AT')
          .then(response => {
            this.setState({ holidays: response.data });
          })
          .catch(error => {
            console.log(error);
            this.setState({ errorMessage: 'Error retrieving data' });
          });
      }
    
      render() {
        const { holidays, errorMessage } = this.state;
        return (
          <React.Fragment>
            <div className="title"><strong>Public Holidays</strong></div>
            <div className="container">
              {holidays.length ? (
                holidays.map((holiday, index) => (
                  <div key={index} className="box">
                    <div className="holiday-details">
                      <div className="holiday-date">Date: {holiday.date}</div>
                      <div className="holiday-name">Name: {holiday.name}</div>
                      <div className="holiday-localname">LocalName: {holiday.localName}</div>
                      <div className="holiday-cntyname">CountryCode: {holiday.countryCode}</div>
                    </div>
                  </div>
                ))
              ) : null}
              {errorMessage ? <div className="error">{errorMessage}</div> : null}
            </div>
          </React.Fragment>
        );
      }
    }
    
export default HolidayComponent
