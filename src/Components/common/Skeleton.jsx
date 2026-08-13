import React from 'react';
import './Skeleton.css';

const Skeleton = ({ width = '100%', height = '100%', circle = false, style }) => {
    return (
        <div
            className={`skeleton ${circle ? 'skeleton-circle' : ''}`}
            style={{ width, height, ...style }}
        />
    );
};

export default Skeleton;
