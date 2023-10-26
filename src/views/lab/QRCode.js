import axios from "axios";
import React from "react";
import QRCode from "react-qr-code";
import "./FetApi.scss";
class AddComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div
          style={{
            height: "auto",
            margin: "0 auto",
            maxWidth: 64,
            width: "100%",
          }}
        >
          <QRCode
            size={256}
            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
            value={"Yeu em"}
            viewBox={`0 0 256 256`}
          />
        </div>
      </>
    );
  }
}

export default AddComponent;
