import React, { useState } from 'react';
import ProjectDescription from './ProjectDescription';
import Filter from './Filter';

const SidePanel = ({ onFilterChange }) => {
    const [activeComponent, setActiveComponent] = useState('PD');

    return (
        <div className="side-panel">
            <div className="side-panel__h">
                Карта раздельного сбора
            </div>
            <div className="side-panel__buttons">
            <button className="side-panel__button" onClick={() => setActiveComponent('PD')}>
                О проекте
            </button>
            <button className="side-panel__button" onClick={() => setActiveComponent('Filter')}>
                Фильтр точек
            </button>
            </div>
            <div className="side-panel__container">
                {activeComponent === 'PD' ? <ProjectDescription /> : <Filter onFilterChange={onFilterChange} />}
            </div>
        </div>
    );
};

export default SidePanel;
