import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Grid,
  isWidthUp,
  Typography,
  withStyles,
  withWidth,
} from "@material-ui/core";
import classNames from "classnames";
import LoanCard from "./LoanCard";

const styles = (theme) => ({
  waveBorder: {
    marginTop: theme.spacing(4),
    paddingTop: theme.spacing(6),
  },
  wrapper: {
    paddingBottom: theme.spacing(2),
  },
  sectionTitle: {
    // backgroundColor: theme.palette.primary.main,
    // color: "white",
  },
});
class LoansSection extends Component {
  render() {
    const { width, classes = {} } = this.props;
    return (
      <>
        <div
          style={{ backgroundColor: "#FFFFFF" }}
          className={classNames(classes.wrapper, "mt-3")}
        >
          <div className="container-fluid">
            <Typography
              variant="h4"
              align="left"
              style={{ textDecoration: "underline" }}
              className={classNames("mb-3", classes.sectionTitle)}
            >
              Loan Section
            </Typography>
          </div>
          <div className="container-fluid">
            <Typography
              variant="h5"
              align="center"
              className="mb-3"
              style={{ marginLeft: "15vw", marginRight: "15vw" }}
            >
              We are empaneled with Leading Banks and NBFCs and helps out
              clients for their Funding Requirement. Followings are different
              types of Loans offered by us through Banks & NBFCs.
            </Typography>
          </div>
          <div className="container-fluid">
            <Grid container spacing={2} className={"mt-4"}>
              {[
                { name: "Home Loan", mdDelay: "0", smDelay: "0" },
                {
                  name: "Loan Against Property (LAP)",
                  mdDelay: "0",
                  smDelay: "0",
                },
                {
                  name: "Lease Rental Discounting",
                  mdDelay: "0",
                  smDelay: "0",
                },
                {
                  name: "Project/ Construction Finance",
                  mdDelay: "0",
                  smDelay: "0",
                },
              ].map((element) => (
                <Grid
                  item
                  xs={6}
                  md={6}
                  data-aos="zoom-in-up"
                  data-aos-delay={
                    isWidthUp("md", width) ? element.mdDelay : element.smDelay
                  }
                  key={element.name}
                >
                  <LoanCard text={element.name} />
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      </>
    );
  }
}

LoansSection.propTypes = {
  width: PropTypes.string.isRequired,
};

export default withWidth()(
  withStyles(styles, { withTheme: true })(LoansSection)
);
