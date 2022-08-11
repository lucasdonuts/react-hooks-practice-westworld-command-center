import React from "react";
import { Card } from "semantic-ui-react";
import Host from './Host';

function HostList({ hosts, selectedHostId, onHostClick }) {
  const hostComponents = hosts.map( host => {
    return(
      <Host
        key={ host.id }
        host={ host }
        selectedHostId={ selectedHostId }
        onHostClick={ onHostClick }
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
