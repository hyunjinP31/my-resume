import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '../module';
import { isGreenBooksOpen, isMyResumeOpen, isStratoOpen, isTempusOpen } from '../module/util';
import ProjectGreenBooks from '../presentational/ProjectGreenBooks';
import ProjectMyResume from '../presentational/ProjectMyResume';
import ProjectStrato from '../presentational/ProjectStrato';
import ProjectTempus from '../presentational/ProjectTempus';

const DescBoxContainer = () => {
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
        <div>
            {util.isOpen.tempusOpen && <ProjectTempus tempusToggle={tempusToggle} />}
            {util.isOpen.stratoOpen && <ProjectStrato stratoToggle={stratoToggle} />}
            {util.isOpen.greenBooksOpen && <ProjectGreenBooks greenBooksToggle={greenBooksToggle} />}
            {util.isOpen.myResumeOpen && <ProjectMyResume myResumeToggle={myResumeToggle} />}
        </div>
    );
};

export default DescBoxContainer;