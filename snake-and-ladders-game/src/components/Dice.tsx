import React from 'react';

const Dice: React.FC<{ roll: number }> = ({ roll }) => {
    return (
        <div style={{ color: '#EEEEEE', fontSize: '24px', textAlign: 'center' }}>
            <h2>Dice Roll: {roll}</h2>
        </div>
    );
};

export default Dice;