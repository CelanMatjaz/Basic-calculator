import React from 'react';

const Display = props => {
    return (
        <div id="display">
            <div>
                {props.otherValue}
            </div>
            <div>
                {props.currentValue || '0'}
            </div>
        </div>
    );
};

export default Display;