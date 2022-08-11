import React, { useState, useEffect } from "react";
import { Segment } from "semantic-ui-react";
import HostList from './HostList';

function ColdStorage({ hosts, selectHost, selectedHostId }) {
  const [ inactiveHosts, setInactiveHosts ] = useState([ ]);

  useEffect( () => {
    setInactiveHosts( () => hosts.filter( host => !host.active ) );
  }, [ hosts ])

  return (
    <Segment.Group className="HQComps">
      <Segment compact>
        <h3 className="labels">ColdStorage</h3>
      </Segment>
      <Segment compact>
        <HostList
          hosts={ inactiveHosts }
          selectHost={ selectHost }
          selectedHostId={ selectedHostId }
        />
      </Segment>
    </Segment.Group>
  );
}

export default ColdStorage;
