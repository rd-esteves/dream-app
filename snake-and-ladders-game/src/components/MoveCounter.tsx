import React from 'react';

interface MoveCounterProps {
    moves: number;
}

const MoveCounter: React.FC<MoveCounterProps> = ({ moves }) => {
    return (
        <div style={{ color: '#EEEEEE', fontSize: '24px', margin: '20px' }}>
            Moves Taken: {moves}
        </div>
    );
};

export default MoveCounter;