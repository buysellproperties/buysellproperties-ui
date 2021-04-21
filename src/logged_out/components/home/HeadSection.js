import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Carousel } from "react-bootstrap";
import {
  Box,
  Card,
  Grid,
  Toolbar,
  withStyles,
  withWidth,
} from "@material-ui/core";
import ZoomImage from "../../../shared/components/ZoomImage";

const styles = (theme) => {
  return {
    extraLargeButtonLabel: {
      fontSize: theme.typography.body1.fontSize,
      [theme.breakpoints.up("sm")]: {
        fontSize: theme.typography.h6.fontSize,
      },
    },
    extraLargeButton: {
      paddingTop: theme.spacing(1.5),
      paddingBottom: theme.spacing(1.5),
      [theme.breakpoints.up("xs")]: {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
      },
      [theme.breakpoints.up("lg")]: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
      },
    },
    card: {
      boxShadow: theme.shadows[4],
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("xs")]: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
      },
      [theme.breakpoints.up("sm")]: {
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(5),
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4),
      },
      [theme.breakpoints.up("md")]: {
        paddingTop: theme.spacing(5.5),
        paddingBottom: theme.spacing(5.5),
        paddingLeft: theme.spacing(5),
        paddingRight: theme.spacing(5),
      },
      [theme.breakpoints.up("lg")]: {
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(6),
        paddingLeft: theme.spacing(6),
        paddingRight: theme.spacing(6),
      },
      [theme.breakpoints.down("lg")]: {
        width: "auto",
      },
    },
    wrapper: {
      position: "relative",
      // backgroundColor: "#91afdc",
      backgroundColor: theme.palette.primary.main,
      paddingBottom: theme.spacing(0.5),
    },
    image: {
      maxWidth: "100%",
      maxHeight: "100%",
      verticalAlign: "middle",
      borderRadius: theme.shape.borderRadius,
      boxShadow: theme.shadows[4],
    },
    container: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(6),
      [theme.breakpoints.down("md")]: {
        marginBottom: theme.spacing(4),
      },
      [theme.breakpoints.down("sm")]: {
        marginBottom: theme.spacing(3),
      },
      [theme.breakpoints.down("sm")]: {
        marginBottom: theme.spacing(1.5),
      },
    },
    containerFix: {
      [theme.breakpoints.up("md")]: {
        maxWidth: "none !important",
      },
    },
    waveBorder: {
      paddingTop: theme.spacing(4),
    },
  };
};

function HeadSection(props) {
  const { classes, theme, width } = props;
  return (
    <Fragment>
      <Toolbar id="back-to-home" />
      <div className={classNames("sm-p-top", classes.wrapper)}>
        <div className={classNames("container-fluid", classes.container)}>
          <Box display="flex" justifyContent="center" className="row">
            <Card
              className={classes.card}
              data-aos-delay="200"
              data-aos="zoom-in"
              style={{ width: "50%" }}
            >
              <div className={classNames(classes.containerFix, "container")}>
                <Box justifyContent="space-between" className="row">
                  {/*<Grid item xs={12} md={5}>*/}
                  {/*  <Box*/}
                  {/*    display="flex"*/}
                  {/*    flexDirection="column"*/}
                  {/*    justifyContent="space-between"*/}
                  {/*    height="100%"*/}
                  {/*  >*/}
                  {/*    <Box mb={4}>*/}
                  {/*      <Typography variant={"h5"}>Tag Line!</Typography>*/}
                  {/*    </Box>*/}
                  {/*    <div>*/}
                  {/*      <Typography*/}
                  {/*        variant={"h5"}*/}
                  {/*        style={{*/}
                  {/*          textDecoration: "underline",*/}
                  {/*        }}*/}
                  {/*      >*/}
                  {/*        Some Content Here*/}
                  {/*      </Typography>*/}
                  {/*      /!*<Box mb={2}>*!/*/}
                  {/*      /!*  <Typography*!/*/}
                  {/*      /!*    variant={isWidthUp("lg", width) ? "h6" : "body1"}*!/*/}
                  {/*      /!*    color="textSecondary"*!/*/}
                  {/*      /!*    style={{ textAlign: "justify" }}*!/*/}
                  {/*      /!*  >*!/*/}
                  {/*      /!*    About Us*!/*/}
                  {/*      /!*  </Typography>*!/*/}
                  {/*      /!*  <br />*!/*/}
                  {/*      /!*  <Typography*!/*/}
                  {/*      /!*    variant={isWidthUp("lg", width) ? "h6" : "body1"}*!/*/}
                  {/*      /!*    color="textSecondary"*!/*/}
                  {/*      /!*    style={{ textAlign: "justify" }}*!/*/}
                  {/*      /!*  >*!/*/}
                  {/*      /!*    Some Extra Text Here*!/*/}
                  {/*      /!*  </Typography>*!/*/}
                  {/*      /!*  <br />*!/*/}
                  {/*      /!*  <Typography variant={"h5"}>*!/*/}
                  {/*      /!*    <strong>Mission and Vision:</strong>*!/*/}
                  {/*      /!*  </Typography>*!/*/}
                  {/*      /!*  <Typography*!/*/}
                  {/*      /!*    variant={isWidthUp("lg", width) ? "h6" : "body1"}*!/*/}
                  {/*      /!*    color="textSecondary"*!/*/}
                  {/*      /!*  >*!/*/}
                  {/*      /!*    <ul>*!/*/}
                  {/*      /!*      <li>1</li>*!/*/}
                  {/*      /!*      <li>2</li>*!/*/}
                  {/*      /!*    </ul>*!/*/}
                  {/*      /!*  </Typography>*!/*/}
                  {/*      /!*</Box>*!/*/}
                  {/*    </div>*/}
                  {/*  </Box>*/}
                  {/*</Grid>*/}
                  <Grid item>
                    <Carousel>
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(
                        (imageNumber, index) => {
                          return (
                            <Carousel.Item key={index}>
                              <ZoomImage
                                src={`${process.env.PUBLIC_URL}/images/building_${imageNumber}.jpg`}
                                className={classes.image}
                                alt={`Alt Building Image ${imageNumber}`}
                              />
                            </Carousel.Item>
                          );
                        }
                      )}
                    </Carousel>
                  </Grid>
                  {/*</Hidden>*/}
                </Box>
              </div>
            </Card>
          </Box>
        </div>
      </div>
      {/*<WaveBorder*/}
      {/*  // upperColor={"#6784b3"}*/}
      {/*  upperColor={"#476d70"}*/}
      {/*  lowerColor="#FFFFFF"*/}
      {/*  className={classes.waveBorder}*/}
      {/*  animationNegativeDelay={2}*/}
      {/*/>*/}
    </Fragment>
  );
}

HeadSection.propTypes = {
  classes: PropTypes.object,
  width: PropTypes.string,
  theme: PropTypes.object,
};

export default withWidth()(
  withStyles(styles, { withTheme: true })(HeadSection)
);
