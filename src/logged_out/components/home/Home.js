import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import HeadSection from "./HeadSection";
import FeatureSection from "./FeatureSection";
import BuySellInvestmentSection from "./BuySellInvestmentSection";

import { Divider } from "@material-ui/core";
import LoansSection from "./LoansSection";
import PricingSection from "./PricingSection";

function Home(props) {
  const { selectHome } = props;
  useEffect(() => {
    selectHome();
  }, [selectHome]);
  return (
    <Fragment>
      <HeadSection />
      <FeatureSection />
      <Divider />
      <BuySellInvestmentSection />
      <Divider />
      <LoansSection />
      {/*<PricingSection />*/}
      {/*<Divider />*/}
      {/*<div>*/}
      {/*  I am Google Form*/}
      {/*  <iframe*/}
      {/*    src="https://docs.google.com/forms/d/e/1FAIpQLScl1MGAgadT-7a928ia_E_6QttHb5FEEEgoPjOrKWoVrCIY0w/viewform?embedded=true"*/}
      {/*    width="100%"*/}
      {/*    height="1000"*/}
      {/*    frameBorder="0"*/}
      {/*    marginHeight="0"*/}
      {/*    marginWidth="0"*/}
      {/*  >*/}
      {/*    Loading…*/}
      {/*  </iframe>*/}
      {/*</div>*/}
    </Fragment>
  );
}

Home.propTypes = {
  selectHome: PropTypes.func.isRequired,
};

export default Home;
