import React from "react";
import PropTypes from "prop-types";

const Event = (props) => {
  return (
    <td className={'Event ' + props.color}>
      <h5>{props.event}</h5>
      <h6>{props.location}</h6>
    </td>
  );
};

Event.propTypes = {
  color: PropTypes.string.isRequired,
  event: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default Event;
