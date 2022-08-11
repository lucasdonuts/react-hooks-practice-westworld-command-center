import React, { useState, useEffect } from "react";
import {
  Radio,
  Icon,
  Card,
  Grid,
  Image,
  Dropdown,
  Divider,
} from "semantic-ui-react";
import "../stylesheets/HostInfo.css";
import { titleCase } from './Area';

function HostInfo({ areas, selectedHostId, updateHost }) {
  const [ host, setHost ] = useState({ });
  const [ options, setOptions ] = useState([ ]);
  const [ currentArea, setCurrentArea ] = useState('');
  const [ isActive, setIsActive ] = useState( false );

  useEffect( () => {
    fetch(`http://localhost:3001/hosts/${ selectedHostId }`)
      .then( res => res.json() )
      .then( hostObj => {
        setHost( hostObj )
        setOptions( () => createOptions() )
        setCurrentArea( hostObj.area )
        setIsActive( hostObj.active )
      })

  }, [ selectedHostId, isActive, currentArea ])

  const createOptions = () => {
    return areas.map( area => {
      return(
        { key: area.name, text: titleCase(area.name), value: area.name }
      )
    })
  }

  function handleOptionChange(e, { value }) {
    updateHost({ ...host, area: value });
    setCurrentArea( value );
  }

  function handleRadioChange() {
    updateHost({ ...host, active: !isActive });
    setIsActive(!isActive);
  }

  return (
    <Grid>
      <Grid.Column width={6}>
        <Image
          src={ host.imageUrl }
          floated="left"
          size="small"
          className="hostImg"
        />
      </Grid.Column>
      <Grid.Column width={10}>
        <Card>
          <Card.Content>
            <Card.Header>
              { host.name } | {host.gender === 'Male' ? <Icon name="man" /> : <Icon name="woman" />}
            </Card.Header>
            <Card.Meta>
              <Radio
                onChange={ handleRadioChange }
                label={ isActive ? "Active" : "Decommissioned" }
                checked={ isActive }
                slider
              />
            </Card.Meta>
            <Divider />
            Current Area:
            <Dropdown
              onChange={ handleOptionChange }
              value={ currentArea }
              options={ options }
              selection
            />
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid>
  );
}

export default HostInfo;