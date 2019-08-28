import React, { Component } from 'react';

import PageWrapper from './PageWrapper';
import Navbar from './Navigation/NavBar';
import Timer from './Timer/Timer';
import Settings from './Settings/Settings';

class App extends Component {
  constructor(props) {
        super(props)
    
        this.state = {
            settingsOpen: false,
            comeback: new Date(2019, 7, 31, 23, 31).getTime(),
            settings: {
              precision: 'hours'
            },
            diff: {
                hours: '00',
                minutes: '00',
                seconds: '00'
            }
        }
    }

    days(time) {
      let diff = parseInt((this.state.comeback - time) / 1000);
      let days = parseInt(diff / (24 * 3600));
      let hours = parseInt((diff - (days * 24 * 3600)) / 3600);
      hours = hours < 10 ? `0${hours}` : hours;
      let minutes = parseInt((diff - 3600 * hours - (days * 24 * 3600)) / 60);
      minutes = minutes < 10 ? `0${minutes}` : minutes;
      let seconds = parseInt(diff - hours * 3600 - minutes * 60 - (days * 24 * 3600));
      seconds = seconds < 10 ? `0${seconds}` : seconds;

      // console.log(hours, minutes, seconds);
      this.setState({
        diff: {
          days: days,
          hours: hours,
          minutes: minutes,
          seconds: seconds
        }
      });
    }
    
    hours(time) {
      
      // console.log('time now', timeNow.getTime());
      // console.log('comeback', comeback.getTime());
      let diff = parseInt((this.state.comeback - time) / 1000);
      let hours = parseInt(diff / 3600);
      let minutes = parseInt((diff - 3600 * hours) / 60);
      minutes = minutes < 10 ? `0${minutes}` : minutes;
      let seconds = parseInt(diff - hours * 3600 - minutes * 60);
      seconds = seconds < 10 ? `0${seconds}` : seconds;

      // console.log(hours, minutes, seconds);
      this.setState({
        diff: {
          days: null, 
          hours: hours,
          minutes: minutes,
          seconds: seconds
        }
      });
    }

    minutes(time) {
      const diff = parseInt((this.state.comeback - time) / 1000);
      let minutes = parseInt((diff) / 60);
      minutes = minutes < 10 ? `0${minutes}` : minutes;
      let seconds = parseInt(diff - minutes * 60);
      seconds = seconds < 10 ? `0${seconds}` : seconds;

      // console.log(hours, minutes, seconds);
      this.setState({
        diff: {
          days: null,
          hours: null,
          minutes: minutes,
          seconds: seconds
        }
      });
    }

    seconds(time) {
      const diff = parseInt((this.state.comeback - time) / 1000);
      let seconds = parseInt(diff);
      seconds = seconds < 10 ? `0${seconds}` : seconds;

      // console.log(hours, minutes, seconds);
      this.setState({
        diff: {
          days: null,
          hours: null,
          minutes: null,
          seconds: seconds
        }
      });
    }

    checkTime() {
      let timeNow = new Date();
      switch(this.state.settings.precision) {
        case 'days':
          this.days(timeNow);
          break;
        case 'hours':
          this.hours(timeNow);
          break;
        case 'minutes':
          this.minutes(timeNow);
          break;
        case 'seconds':
          this.seconds(timeNow);
          break;
        default: 
          break;
      }
    }

    componentDidMount() {
        // const comeback = new Date(2019, 7, 31, 23, 31);
        setInterval(this.checkTime.bind(this), 1000);

    }

    openSettings() {
      this.setState( {
        settingsOpen: true
      })
    }

    closeSettings() {
      this.setState({
        settingsOpen: false
      })
    }

    changePrecision(event) {
      this.setState({
        settings: {
          ...this.state.settings,
          precision: event.target.value
        }
      })
    }

    render() {
      return(
        <PageWrapper>
          <Navbar settingsOpen={this.state.settingsOpen} openSettings={this.openSettings.bind(this)} closeSettings={this.closeSettings.bind(this)} />
          <Timer precision={this.state.settings.precision} settingsOpen={this.state.settingsOpen} time={this.state.diff}/>
          <Settings changePrecision={this.changePrecision.bind(this)} settings={this.state.settings} settingsOpen={this.state.settingsOpen} />
        </PageWrapper>
      )
    }
}




export default App;
