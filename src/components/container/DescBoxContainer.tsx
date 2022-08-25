import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { RootState } from '../module';
import { isGreenBooksOpen, isStratoOpen, isTempusOpen } from '../module/util';
import ProjectTempus from '../presentational/ProjectTempus';

const DescBoxContainer = () => {
    const isOpen = useSelector((state: RootState)=> state.util.isOpen);
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
            <Routes>
                <Route path='tempusproject' element={<ProjectTempus />} />
            </Routes>
        </div>
    );
};

export default DescBoxContainer;