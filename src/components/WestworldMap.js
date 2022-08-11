import React from "react";
import { Segment } from "semantic-ui-react";
import Area from './Area';

function WestworldMap({ areas, hosts, selectHost, selectedHostId }) {
  const areaComponents = areas.map( area => {
    return (
      <Area
        key={ area.id } 
        area={ area }
        hosts={ hosts }
        selectHost={ selectHost }
        selectedHostId={ selectedHostId }
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
