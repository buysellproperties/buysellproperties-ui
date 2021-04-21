import React from "react";
import PropTypes from "prop-types";
import {
  Grid,
  isWidthUp,
  Typography,
  withStyles,
  withWidth,
} from "@material-ui/core";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import FeatureCard from "./FeatureCard";

import classNames from "classnames";

import BuildIcon from "@material-ui/icons/Build";
import ComputerIcon from "@material-ui/icons/Computer";
import MessageIcon from "@material-ui/icons/Message";

const iconSize = 30;

const styles = (theme) => ({
  waveBorder: {
    marginTop: theme.spacing(4),
    paddingTop: theme.spacing(6),
  },
  wrapper: {
    paddingBottom: theme.spacing(2),
  },
});

const features = [
  {
    color: "#00C853",
    headline: "Project Marketing",
    text: "Project Marketing",
    icon: <BuildIcon style={{ fontSize: iconSize }} />,
    mdDelay: "0",
    smDelay: "0",
  },
  {
    color: "#6200EA",
    headline: "Property Portfolio Management",
    text: "Property Portfolio Management",
    icon: <CalendarTodayIcon style={{ fontSize: iconSize }} />,
    mdDelay: "200",
    smDelay: "200",
  },
  {
    color: "#0091EA",
    headline: "Buy, Sell, Rent",
    text: "Buy, Sell, Rent",
    icon: <MessageIcon style={{ fontSize: iconSize }} />,
    mdDelay: "400",
    smDelay: "0",
  },
  {
    color: "#d50000",
    headline: "Loans",
    text: "Loans",
    icon: <ComputerIcon style={{ fontSize: iconSize }} />,
    mdDelay: "0",
    smDelay: "200",
  },
  // {
  //   color: "#DD2C00",
  //   headline: "Feature 5",
  //   text:
  //     "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
  //   // icon: <BarChartIcon style={{ fontSize: iconSize }} />,
  //   mdDelay: "200",
  //   smDelay: "0",
  // },
  // {
  //   color: "#64DD17",
  //   headline: "Feature 6",
  //   text:
  //     "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
  //   icon: <HeadsetMicIcon style={{ fontSize: iconSize }} />,
  //   mdDelay: "400",
  //   smDelay: "200"
  // },
  // {
  //   color: "#304FFE",
  //   headline: "Feature 7",
  //   text:
  //     "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
  //   icon: <CloudIcon style={{ fontSize: iconSize }} />,
  //   mdDelay: "0",
  //   smDelay: "0"
  // },
  // {
  //   color: "#C51162",
  //   headline: "Feature 8",
  //   text:
  //     "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
  //   icon: <CodeIcon style={{ fontSize: iconSize }} />,
  //   mdDelay: "200",
  //   smDelay: "200"
  // },
  // {
  //   color: "#00B8D4",
  //   headline: "Feature 9",
  //   text:
  //     "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
  //   icon: <CancelIcon style={{ fontSize: iconSize }} />,
  //   mdDelay: "400",
  //   smDelay: "0"
  // }
];

function FeatureSection(props) {
  const { width, classes = {} } = props;
  return (
    <>
      <div
        style={{ backgroundColor: "#FFFFFF" }}
        className={classNames(classes.wrapper, "mt-3")}
      >
        <div className="container-fluid" id="back-to-services">
          <Typography variant="h4" align="center" className="mb-3">
            Services
          </Typography>
          <div className="container-fluid">
            <Grid container spacing={2}>
              {features.map((element) => (
                <Grid
                  item
                  xs={6}
                  md={6}
                  data-aos="zoom-in-up"
                  data-aos-delay={
                    isWidthUp("md", width) ? element.mdDelay : element.smDelay
                  }
                  key={element.headline}
                >
                  <FeatureCard
                    Icon={element.icon}
                    color={element.color}
                    headline={element.headline}
                    text={element.text}
                  />
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      </div>
      {/*<WaveBorder*/}
      {/*  // upperColor={"#6784b3"}*/}
      {/*  upperColor={"#476d70"}*/}
      {/*  lowerColor="#FFFFFF"*/}
      {/*  className={classes.waveBorder}*/}
      {/*  animationNegativeDelay={2}*/}
      {/*/>*/}
    </>
  );
}

FeatureSection.propTypes = {
  width: PropTypes.string.isRequired,
};

export default withWidth()(
  withStyles(styles, { withTheme: true })(FeatureSection)
);
