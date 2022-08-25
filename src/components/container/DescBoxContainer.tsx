import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../module';
import ProjectTempus from '../presentational/ProjectTempus';

const DescBoxContainer = () => {
    const isOpen = useSelector((state: RootState)=> state.util.isOpen);
    return (
        <div>
            {isOpen.tempusOpen && <ProjectTempus />}
        </div>
    );
};

export default DescBoxContainer;