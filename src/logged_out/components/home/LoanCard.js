import React, { Fragment } from "react";
import { Typography, withStyles } from "@material-ui/core";
import classNames from "classnames";

const styles = (theme) => ({
  itemWrapper: {
    backgroundColor: "white",
  },
});
function LoanCard(props) {
  const { text, classes = {} } = props;
  return (
    <Fragment>
      <div>
        <Typography
          className={classNames(
            classes.itemWrapper,
            "text-uppercase",
            "pt-2",
            "pb-2"
          )}
          align={"center"}
          style={{ fontSize: "25px" }}
        >
          {text}
        </Typography>
      </div>
    </Fragment>
  );
}

export default withStyles(styles, { withTheme: true })(LoanCard);
