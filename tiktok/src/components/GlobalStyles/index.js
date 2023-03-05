import React from 'react';
import './GlobalStyles.scss';
import propTypes from 'prop-types';

function GlobalStyles({ children }) {
    return React.Children.only(children);
}
GlobalStyles.propTypes = {
    children: propTypes.node.isRequired,
};
export default GlobalStyles;
