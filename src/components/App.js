import React, { useState, useEffect } from "react";
import { Segment } from "semantic-ui-react";
import "../stylesheets/App.css";
import WestworldMap from './WestworldMap';
import Headquarters from './Headquarters';

function App() {
  const [ hosts, setHosts ] = useState([]);
  const [ activeHosts, setActiveHosts ] = useState([]);
  const [ inactiveHosts, setInactiveHosts ] = useState([]);
  const [ areas, setAreas ] = useState([]);
  const [ selectedHostId, setSelectedHostId ] = useState( null );

  useEffect( () => {
    fetch('http://localhost:3001/hosts')
      .then( res => res.json() )
      .then( hostData => {
        setHosts( hostData );
        setActiveHosts( hostData.filter( host => host.active ) );
        setInactiveHosts( hostData.filter( host => !host.active ) );
      })
    
    fetch('http://localhost:3001/areas')
      .then( res => res.json() )
      .then( setAreas )
  }, [])

  const onHostClick = (hostId) => {
    setSelectedHostId( hostId )
  }

  const updateHost = ( updatedHost ) => {
    fetch(`http://localhost:3001/hosts/${ updatedHost.id }`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify( updatedHost )
    })
      .then( res => res.json() )
      .then( () => setHosts( hosts.map( host => host.id === updatedHost.id ? updatedHost : host ) ) )
  }

  return (
    <Segment id="app">
      <WestworldMap
        areas={ areas }
        hosts={ activeHosts }
        selectedHostId={ selectedHostId }
        onHostClick={ onHostClick }
      />
      <Headquarters
        areas={ areas }
        hosts={ inactiveHosts }
        selectedHostId={ selectedHostId }
        onHostClick={ onHostClick }
        updateHost={ updateHost }
      />
    </Segment>
  );
}

export default App;
