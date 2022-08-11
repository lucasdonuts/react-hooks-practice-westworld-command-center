import React, { useState } from "react";
import { Card } from "semantic-ui-react";
import "../stylesheets/Host.css";

function Host({ host, selectedHostId, onHostClick }) {
  const [ selected, setSelected ] = useState( false );

  const { id, imageUrl } = host;

  const handleClick = () => {
    console.log( selected, id, selectedHostId, host )
    setSelected( id === selectedHostId );
    onHostClick( id );
  }

  return (
    <Card
      className= { selected ? "host selected" : "host" }
      onClick={ handleClick }
      image={ imageUrl }
      raised
      link
    />
  );
}

export default Host;
