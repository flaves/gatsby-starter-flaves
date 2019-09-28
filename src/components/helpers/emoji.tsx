import React from 'react';

interface props {
  label: string;
  symbol: any
}

const Emoji = ({ label, symbol }: props) => (
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

export default Emoji;
