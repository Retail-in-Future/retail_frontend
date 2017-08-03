import React from 'react';
import PropTypes from 'prop-types';

export default function Header({ title }) {
    return (
        <div>{ title }</div>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired
};

