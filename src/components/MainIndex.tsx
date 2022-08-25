import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import AboutMe from './AboutMe';
import GreenBooks from './GreenBooks';
import { RootState } from './module';
import { isGreenBooksOpen, isStratoOpen, isTempusOpen } from './module/util';
import StratoSite from './StratoSite';
import TempusSite from './TempusSite';


const MainIndex = () => {
    const util = useSelector((state: RootState)=> state.util);
    const dispatch = useDispatch();
    const tempusToggle = () => {
        dispatch(isTempusOpen());
    }
    const stratoToggle = () => {
        dispatch(isStratoOpen());
    }
    const greenBooksToggle = () => {
        dispatch(isGreenBooksOpen());
    }
    return (
        <div className='Wrap'>
            <AboutMe util={util} tempusToggle={tempusToggle} stratoToggle={stratoToggle} greenBooksToggle={greenBooksToggle} />
            <TempusSite />
            <StratoSite />
            <GreenBooks />
        </div>
    );
};

export default MainIndex;