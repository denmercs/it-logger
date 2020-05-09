import React from "react";
import PropTypes from "prop-types";

const LogItem = ({ log }) => {
  return (
    <div>
      <li className="collection-item">
        <a
          href="#edit-log-modal"
          className={`modal-trigger ${
            log.attention ? "red-text" : "blue-text"
          }`}
        >
          {log.message}
        </a>
      </li>
    </div>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
};

export default LogItem;
