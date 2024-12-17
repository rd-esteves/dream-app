import React from 'react';

interface RollButtonProps {
    onRoll: () => void;
}

const RollButton: React.FC<RollButtonProps> = ({ onRoll }) => {
    return (
        <button onClick={onRoll} style={{ backgroundColor: '#134B70', color: '#EEEEEE', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
            Roll Dice
        </button>
    );
};

export default RollButton;