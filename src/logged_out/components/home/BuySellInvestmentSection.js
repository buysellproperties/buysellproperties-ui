import React, { Component } from "react";
import PropTypes from "prop-types";
import { Typography, withStyles, withWidth } from "@material-ui/core";
import classNames from "classnames";

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

class BuySellInvestmentSection extends Component {
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
              But, Sell, Rent & Investment
            </Typography>
          </div>
          <div className="container-fluid">
            <Typography variant="h5" align="center" className="mb-3">
              We provide a
              <span className="text-danger ml-2">"One Stop Solution"</span>
            </Typography>
            <Typography variant="h5" align="center" className="mb-3">
              Bouquet of Products & Offerings in various categories.
            </Typography>
          </div>
          <div>
            <ul>
              {[
                {
                  title: "Residential",
                  children: (
                    <>
                      Plots, Flats, Apartments, Penthouses, Duplexes, Villas,
                      Farm house, Town-houses & Bungalow.
                    </>
                  ),
                },
                {
                  title: "Commercial",
                  children: (
                    <>Offices, Shops, Retail Showrooms, Corporate Houses.</>
                  ),
                },
                {
                  title: "Land",
                  children: <>Agricultural & Non Agricultural</>,
                },
                {
                  title: "Pre-Leased Properties",
                  children: (
                    <>Banks, Financial Institutes, Retail Brands etc.</>
                  ),
                },
              ].map((content, index) => {
                return (
                  <li>
                    <Typography variant="h6" className="text-danger">
                      {content.title}
                    </Typography>
                    <Typography
                      className={"ml-4"}
                      variant="paragraph"
                      style={{ fontSize: "20px" }}
                    >
                      {content.children}
                    </Typography>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </>
    );
  }
}

BuySellInvestmentSection.propTypes = {
  width: PropTypes.string.isRequired,
};

export default withWidth()(
  withStyles(styles, { withTheme: true })(BuySellInvestmentSection)
);
