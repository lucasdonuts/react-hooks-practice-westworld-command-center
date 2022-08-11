import React from "react";
import "../stylesheets/Area.css";
import HostList from './HostList';

export const titleCase = ( title ) => {
  return title.split( '_' ).map( word => word.charAt(0).toUpperCase() + word.slice(1) ).join(' ');
}

function Area({ area, hostsInArea, onHostClick, selectedHostId }) {
  const { name , limit, auth_req } = area;

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
        onHostClick={ onHostClick }
        selectedHostId={ selectedHostId }
      />
    </div>
  );
}

// Area.propTypes = {
//   hosts: function (props) {
//     if (props.hosts.length > props.limit) {
//       throw Error(
//         `HEY!! You got too many hosts in ${props.name}. The limit for that area is ${props.limit}. You gotta fix that!`
//       );
//     }
//   },
// };

export default Area;
