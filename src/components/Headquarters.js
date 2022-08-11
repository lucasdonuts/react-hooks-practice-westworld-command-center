import React from "react";
import { Grid } from "semantic-ui-react";
import Details from "./Details";
import "../stylesheets/Headquarters.css";
import ColdStorage from './ColdStorage';
import LogPanel from './LogPanel';

function Headquarters({ areas, hosts, selectHost, selectedHostId, updateHost }) {
  return (
    <Grid celled="internally">
      <Grid.Column width={8}>
        <ColdStorage
          hosts={ hosts }
          selectHost={ selectHost }
          selectedHostId={ selectedHostId }
        />
      </Grid.Column>
      <Grid.Column width={5}>
        <Details
          areas={ areas }
          selectedHostId={ selectedHostId }
          updateHost={ updateHost }
        />
      </Grid.Column>
      <Grid.Column width={3}>
        {/* <LogPanel /> */}
      </Grid.Column>
    </Grid>
  );
}

export default Headquarters;
