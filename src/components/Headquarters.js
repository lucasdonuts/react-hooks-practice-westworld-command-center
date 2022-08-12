import React from "react";
import { Grid } from "semantic-ui-react";
import Details from "./Details";
import "../stylesheets/Headquarters.css";
import ColdStorage from './ColdStorage';
import LogPanel from './LogPanel';

function Headquarters({
    areas,
    hosts,
    selectHost,
    selectedHostId,
    updateHost,
    areaPopulations,
    tallyAreaPopulations
  }) {
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
          hosts={ hosts }
          areas={ areas }
          selectedHostId={ selectedHostId }
          updateHost={ updateHost }
          areaPopulations={ areaPopulations }
          tallyAreaPopulations={ tallyAreaPopulations }
        />
      </Grid.Column>
      <Grid.Column width={3}>
        <LogPanel />
      </Grid.Column>
    </Grid>
  );
}

export default Headquarters;
