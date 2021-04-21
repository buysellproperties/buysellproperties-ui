import React, { Component } from "react";
import { Spinner } from "react-bootstrap";
import "./FallBackUi.scss";

class FallBackUi extends Component {
  render() {
    return (
      <>
        <div
          className={
            "align-items-center justify-content-center row col-md-12 fall-back-ui-container"
          }
        >
          {/*<img src={toAbsoluteUrl("logo_small.png")} alt={"Web Dev Logo"} />*/}
          <div
            className={
              "col-md-12 row align-items-center justify-content-center"
            }
          >
            <Spinner animation="border" role="status" />
            <span className={"ml-2"}>Loading...</span>
          </div>
        </div>
      </>
    );
  }
}

export default FallBackUi;
