import React from 'react';

// asset
import AnimatedSpinner from '../../assets/placeholders/animated_spinner.webp';

export const Spinner = (): JSX.Element => (
    <div className="spinner">
        <img src={AnimatedSpinner} alt="Spinner" />
    </div>
);
