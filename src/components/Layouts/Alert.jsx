import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";

export const Alert = ({ alerts }) => {
  return (
    <div className="alert-wrapper">
      {alerts.map((alert) => (
        <div key={alert.id} className={`alert alert-${alert.alertType}`}>
          {alert.msg}
        </div>
      ))}
    </div>
  );
};

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alertReducer,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Alert);
