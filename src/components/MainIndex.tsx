import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import AboutMe from './AboutMe';
import { RootState } from './module';
import { isGreenBooksOpen, isMyResumeOpen, isStratoOpen, isTempusOpen } from './module/util';


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
    const myResumeToggle = () => {
        dispatch(isMyResumeOpen());
    }
    return (
        <div className='Wrap'>
            <AboutMe
            util={util}
            tempusToggle={tempusToggle}
            stratoToggle={stratoToggle}
            greenBooksToggle={greenBooksToggle}
            myResumeToggle={myResumeToggle}/>
        </div>
    );
};

export default MainIndex;