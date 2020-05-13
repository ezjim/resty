import React from 'react';
import PropTypes from 'prop-types';

const HistoryItem = ({ url, method }) => (
  <section>
    <p>URL: {url}</p>
    <p>Method: {method}</p>
  </section>
);

HistoryItem.propTypes = {
  url: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired
};

export default HistoryItem;