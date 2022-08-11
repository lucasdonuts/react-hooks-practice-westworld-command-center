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
  // const [options] = useState([
  //   { key: "some_area", text: "Some Area", value: "some_area" },
  //   { key: "another_area", text: "Another Area", value: "another_area" },
  // ]);

  // const [value] = useState("some_area");

  function handleOptionChange(e, { value }) {
    
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
              {/* Think about how the above should work to conditionally render the right First Name and the right gender Icon */}
            </Card.Header>
            <Card.Meta>
              {/* Sometimes the label should take "Decommissioned". How are we going to conditionally render that? */}
              {/* Checked takes a boolean and determines what position the switch is in. Should it always be true? */}
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

// function HostInfo({ selectedHostId }) {
//   // This state is just to show how the dropdown component works.
//   // Options have to be formatted in this way (array of objects with keys of: key, text, value)
//   // Value has to match the value in the object to render the right text.

//   // IMPORTANT: But whether it should be stateful or not is entirely up to you. Change this component however you like.
//   const [options] = useState([
//     { key: "some_area", text: "Some Area", value: "some_area" },
//     { key: "another_area", text: "Another Area", value: "another_area" },
//   ]);

//   const [value] = useState("some_area");

//   function handleOptionChange(e, { value }) {
//     // the 'value' attribute is given via Semantic's Dropdown component.
//     // Put a debugger or console.log in here and see what the "value" variable is when you pass in different options.
//     // See the Semantic docs for more info: https://react.semantic-ui.com/modules/dropdown/#usage-controlled
//   }

//   function handleRadioChange() {
//     console.log("The radio button fired");
//   }

//   return (
//     <Grid>
//       <Grid.Column width={6}>
//         <Image
//           src={/* pass in the right image here */ ""}
//           floated="left"
//           size="small"
//           className="hostImg"
//         />
//       </Grid.Column>
//       <Grid.Column width={10}>
//         <Card>
//           <Card.Content>
//             <Card.Header>
//               {"Bob"} | {true ? <Icon name="man" /> : <Icon name="woman" />}
//               {/* Think about how the above should work to conditionally render the right First Name and the right gender Icon */}
//             </Card.Header>
//             <Card.Meta>
//               {/* Sometimes the label should take "Decommissioned". How are we going to conditionally render that? */}
//               {/* Checked takes a boolean and determines what position the switch is in. Should it always be true? */}
//               <Radio
//                 onChange={handleRadioChange}
//                 label={"Active"}
//                 checked={true}
//                 slider
//               />
//             </Card.Meta>
//             <Divider />
//             Current Area:
//             <Dropdown
//               onChange={handleOptionChange}
//               value={value}
//               options={options}
//               selection
//             />
//           </Card.Content>
//         </Card>
//       </Grid.Column>
//     </Grid>
//   );
// }
