import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Header } from './components/Header'
import { Sport } from './components/Sport'
import { Outcome } from './components/Outcome'
import { Event } from './components/Event'
import { getAllOutcomes } from './services/OutcomeService'
import { getAllEvents } from './services/EventService'
import { getAllSports } from './services/SportService'
import { BuildResult } from "./components/BuildResult";

function App() {

    const [outcome, setOutcome] = useState({})
    const [outcomes, setOutcomes] = useState([])
    const [event, setEvent] = useState({})
    const [events, setEvents] = useState([])
    const [sport, setSport] = useState({})
    const [sports, setSports] = useState([])


    const fetchAllOutcomes = () => {
        getAllOutcomes(outcome)
            .then(outcomes => {
                console.log(outcomes)
                setOutcomes(outcomes);
                setEvents([]);
                setSports([]);
            });
    }

    const fetchAllEvents = () => {
        getAllEvents(event)
            .then(events => {
                console.log(events)
                setEvents(events);
                setSports([]);
                setOutcomes([]);
            });
    }

    const fetchAllSports = () => {
        getAllSports()
            .then(events => {
                console.log(events)
                setSports(events);
                setEvents([]);
                setOutcomes([]);
            });
    }

    const onChangeOutcomeForm = (e) => {
        console.log(e)
        if (e.target.name === 'sport_id') {
            outcome.sportID = e.target.value;
        } else if (e.target.name === 'event_id') {
            outcome.eventID = e.target.value;
        }
        setOutcome(outcome)
    }

    const onChangeEventForm = (e) => {
        console.log(e)
        if (e.target.name === 'sport_id') {
            event.sportID = e.target.value;
        }
        setEvent(event)
    }

  return (
    <div className="App">
      <Header></Header>
        <div className="container mrgnbtm">
            <div className="row">
                <div className="col-md-4">
                    <Sport
                        sport={sport}
                        getAllSports={fetchAllSports}
                    >
                    </Sport>
                </div>
                <div className="col-md-4">
                    <Outcome
                        outcom={outcome}
                        onChangeForm={onChangeOutcomeForm}
                        getAllOutcomes={fetchAllOutcomes}
                    >
                    </Outcome>
                </div>
                <div className="col-md-4">
                    <Event
                        event={event}
                        onChangeForm={onChangeEventForm}
                        getAllEvents={fetchAllEvents}>
                    </Event>
                </div>
            </div>
        </div>
        <BuildResult
            objects={{outcomes: outcomes, events: events, sports: sports}}>
        </BuildResult>
    </div>
  );
}

export default App;
