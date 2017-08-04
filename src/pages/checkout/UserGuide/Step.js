import React from 'react';
import PropTypes from 'prop-types';

const Step = ({ step, instructions }) => (
    <div>
        {step}, {instructions}
    </div>
);

Step.propTypes = {
    step: PropTypes.number.isRequired,
    instructions: PropTypes.string.isRequired
};

export default Step;
