import React from 'react'
import IconPlastic from '../img/filter_images/90.png'
import IconPaper from '../img/filter_images/91.png'
import IconGlass from '../img/filter_images/92.png'
import IconRare from '../img/filter_images/93.png'
import IconBat from '../img/filter_images/4.png'
import IconCap from '../img/filter_images/9.png'

function Filter({ onFilterChange }) {
    const handleCheckboxChange = (event) => {
        const filterType = event.target.value;
        onFilterChange(filterType);
    };

    return (
        <div className="filter">
            <label className="filter__checkbox">
                <input type="checkbox" value="plastic" onChange={handleCheckboxChange} /> Пластик
                <img className="filter__img" src={IconPlastic} alt="1" />
            </label>
            <label className="filter__checkbox">
                <input type="checkbox" value="paper" onChange={handleCheckboxChange} /> Бумага
                <img className="filter__img" src={IconPaper} alt="2" />
            </label>
            <label className="filter__checkbox">
                <input type="checkbox" value="glass" onChange={handleCheckboxChange} /> Стекло
                <img className="filter__img" src={IconGlass} alt="3" />
            </label>
            <label className="filter__checkbox">
                <input type="checkbox" value="rare" onChange={handleCheckboxChange} /> Редкости
                <img className="filter__img" src={IconRare} alt="4" />
            </label>
            <label className="filter__checkbox">
                <input type="checkbox" value="battery" onChange={handleCheckboxChange} /> Батарейки
                <img className="filter__img" src={IconBat} alt="5" />
            </label>
            <label className="filter__checkbox">
                <input type="checkbox" value="cap" onChange={handleCheckboxChange} /> Крышечки
                <img className="filter__img" src={IconCap} alt="6" />
            </label>
            </div>
    );
}

export default Filter;
