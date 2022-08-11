import React, { useState, useEffect } from "react";
import "../stylesheets/Area.css";
import HostList from './HostList';

export const titleCase = ( name ) => {
  return name.split('_').map( word => word.charAt(0).toUpperCase() + word.slice(1) ).join(' ');
}

function Area({ area, hosts, selectHost, selectedHostId }) {
  const [ hostsInArea, setHostsInArea ] = useState([ ]);

  const { name, limit, auth_req } = area;

  useEffect( () => {
    setHostsInArea( hosts.filter( host => host.area === name && host.active ) )
  }, [ hosts, name ])

  return (
    <div
      className="area"
      id={ name }
    >
      <h3 className="labels">
        { titleCase( name ) }
      </h3>
      <HostList
        hosts={ hostsInArea }
        selectHost={ selectHost }
        selectedHostId={ selectedHostId }
      />
    </div>
  );
}

Area.propTypes = {
  hosts: function (props) {
    if (props.hosts.length > props.limit) {
      throw Error(
        `HEY!! You got too many hosts in ${props.name}. The limit for that area is ${props.limit}. You gotta fix that!`
      );
    }
  },
};

export default Area;
