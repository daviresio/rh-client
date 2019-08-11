import React from 'react';

const Hero = ({heroName}) => {
    if (heroName === 'joker') throw new Error('Not a hero');
    return (
        <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
            {heroName}
        </div>
    );
};

export default Hero;
