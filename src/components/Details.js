import React from "react";
import { Segment, Image } from "semantic-ui-react";
import * as Images from "../services/Images";
import HostInfo from './HostInfo';

function Details({ areas, selectedHostId, updateHost }) {
  // We'll render the logo if no host is selected. But if a host does get selected....
  // Watch the video to see how this works in the app.

  return (
    <Segment id="details" className="HQComps">
      {
        selectedHostId
        ? <HostInfo
            areas={ areas }
            selectedHostId={ selectedHostId }
            updateHost={ updateHost }
          />
        : <Image size="medium" src={Images.westworldLogo} />
      }
    </Segment>
  );
}

export default Details;
