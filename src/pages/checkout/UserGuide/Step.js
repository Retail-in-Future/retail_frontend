import React from 'react';
import PropTypes from 'prop-types';

import styles from './Step.scss';

const Step = ({ step, instructions }) => (
    <div>
        <div className={styles.steps}>
            <img src="/src/assets/steps.svg" alt={`step${step}`} className={styles.image} />
            <span>Step {step}</span>
        </div>
        <div className={styles.instructions}>{instructions}</div>
    </div>
);

Step.propTypes = {
    step: PropTypes.number.isRequired,
    instructions: PropTypes.string.isRequired
};

export default Step;
