import React from 'react';
import PropTypes from 'prop-types';

import styles from './Step.scss';

const Step = ({ step, instructions }) => (
    <div>
        <div className={styles.steps}>
            <img src="/src/assets/steps.svg" alt={`steps${step}`} width="80" />
            Step {step}
        </div>
        <div className={styles.instructions}>{instructions}</div>
    </div>
);

Step.propTypes = {
    step: PropTypes.number.isRequired,
    instructions: PropTypes.string.isRequired
};

export default Step;
