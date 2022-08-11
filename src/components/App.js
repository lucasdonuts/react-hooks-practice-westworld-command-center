import React, { useState, useEffect } from "react";
import { Segment } from "semantic-ui-react";
import "../stylesheets/App.css";
import WestworldMap from './WestworldMap';
import Headquarters from './Headquarters';

function App() {
  const [ areas, setAreas ] = useState([ ]);
  const [ hosts, setHosts ] = useState([ ]);
  const [ selectedHostId, setSelectedHostId ] = useState();

  useEffect( () => {
    fetch( 'http://localhost:3001/hosts' )
      .then( res => res.json() )
      .then( setHosts )

    fetch( 'http://localhost:3001/areas' )
      .then( res => res.json() )
      .then( setAreas )
  }, [ ])

  const selectHost = ( host ) => {
    setSelectedHostId( host.id )
  }

  const updateHost = (hostUpdated) => {
    fetch(`http://localhost:3001/hosts/${ hostUpdated.id }`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify( hostUpdated )
    })
      .then( res => res.json() )
      .then( updatedHost => setHosts( hosts => hosts.map( host => {
        if( updatedHost.id === host.id ) {
          return updatedHost
        } else {
          return host
        }
      })))
  }

  return (
    <Segment id="app">
      <WestworldMap
        areas={ areas }
        hosts={ hosts }
        selectHost={ selectHost }
        selectedHostId={ selectedHostId }
      />
      <Headquarters
        areas={ areas }
        hosts={ hosts }
        selectHost={ selectHost }
        selectedHostId={ selectedHostId }
        updateHost={ updateHost }
      />
    </Segment>
  );
}

export default App;
