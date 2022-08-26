import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '../module';
import { isGreenBooksOpen, isStratoOpen, isTempusOpen } from '../module/util';
import ProjectGreenBooks from '../presentational/ProjectGreenBooks';
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
    return (
        <div>
            {util.isOpen.tempusOpen && <ProjectTempus tempusToggle={tempusToggle} />}
            {util.isOpen.stratoOpen && <ProjectStrato stratoToggle={stratoToggle} />}
            {util.isOpen.greenBooksOpen && <ProjectGreenBooks greenBooksToggle={greenBooksToggle} />}
        </div>
    );
};

export default DescBoxContainer;