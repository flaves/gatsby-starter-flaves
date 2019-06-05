import React from 'react';
import * as PropTypes from 'prop-types';

const Emoji = ({ label, symbol }) => (
  <span
    className="Emoji"
    role="img"
    aria-label={label ? label : ``}
    aria-hidden={!label}
    style={{ marginRight: `5px`, display: `inline-block` }}
  >
    {symbol}
  </span>
);

Emoji.propTypes = {
  symbol: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Emoji;
