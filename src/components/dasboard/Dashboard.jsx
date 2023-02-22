import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";

export const Dashboard = (props) => {
  return <div>Welcom UserName</div>;
};

Dashboard.propTypes = {};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
