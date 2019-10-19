import React from 'react';

interface EmojiProps {
  label: string;
  symbol: any;
}

const Emoji: React.FC<EmojiProps> = ({ label, symbol }) => (
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
