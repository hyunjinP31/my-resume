import React from 'react';
import AboutMe from './AboutMe';
import GreenBooks from './GreenBooks';
import StratoSite from './StratoSite';
import TempusSite from './TempusSite';

const MainIndex = () => {
    return (
        <div className='Wrap'>
            <AboutMe />
            <TempusSite />
            <StratoSite />
            <GreenBooks />
        </div>
    );
};

export default MainIndex;