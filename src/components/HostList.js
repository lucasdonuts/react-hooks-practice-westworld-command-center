import React from "react";
import { Card } from "semantic-ui-react";
import Host from './Host';

function HostList({ hosts, selectHost, selectedHostId }) {
  const hostComponents = hosts.map( host => {
    return(
      <Host
        key={ host.id }
        host={ host }
        selectHost={ selectHost }
        selectedHostId={ selectedHostId }
      />
    )
  })

  return (
    <Card.Group itemsPerRow={6}>
      { hostComponents }  
    </Card.Group>
  );
}

export default HostList;
