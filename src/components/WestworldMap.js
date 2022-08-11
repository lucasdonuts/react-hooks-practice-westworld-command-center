import React from "react";
import { Segment } from "semantic-ui-react";
import Area from './Area';

function WestworldMap({ hosts, areas, selectedHostId, onHostClick }) {
  const areaComponents = areas.map( area => {
    const hostsInArea = hosts.filter( host => host.area === area.name );

    return(
      <Area
        key={ area.id }
        area={ area }
        hostsInArea={ hostsInArea }
        onHostClick={ onHostClick }
      />
    )
  })

  return(
    <Segment id="map">
      { areaComponents }
    </Segment>
  )
}

export default WestworldMap;
