import React from 'react'
import IconPlastic from '../img/filter_images/90.png'
import IconPaper from '../img/filter_images/91.png'
import IconGlass from '../img/filter_images/92.png'
import IconRare from '../img/filter_images/93.png'
import IconBat from '../img/filter_images/94.png'
import IconCap from '../img/filter_images/99.png'

function Filter({ onFilterChange }) {
    const handleCheckboxChange = (event) => {
        const filterType = event.target.value;
        let isChecked = event.target.checked;
        onFilterChange(filterType, isChecked);
    };

    return (
        <div className="filter">
            <div className="filter__container">
             <label className="filter__checkbox">
                <input type="checkbox" value="plastic" onChange={handleCheckboxChange} />
                <img className="filter__img" src={IconPlastic} alt="1" />
                <span class="filter__text">Пластик</span>
             </label>
            </div>
            <div className="filter__container">
             <label className="filter__checkbox">
                <input type="checkbox" value="paper" onChange={handleCheckboxChange} />
                <img className="filter__img" src={IconPaper} alt="2" /> 
                <span class="filter__text">Бумага</span>
             </label>
            </div>
            <div className="filter__container">
             <label className="filter__checkbox">
                <input type="checkbox" value="glass" onChange={handleCheckboxChange} />
                <img className="filter__img" src={IconGlass} alt="3" />
                <span class="filter__text">Стекло</span>
             </label>
            </div>
            <div className="filter__container">
             <label className="filter__checkbox">
                <input type="checkbox" value="rare" onChange={handleCheckboxChange} />
                <img className="filter__img" src={IconRare} alt="4" />
                <span class="filter__text">Редкости</span>
             </label>
            </div>
            <div className="filter__container">
             <label className="filter__checkbox">
                <input type="checkbox" value="battery" onChange={handleCheckboxChange} /> 
                <img className="filter__img" src={IconBat} alt="5" />
                <span class="filter__text">Батарейки</span>
             </label>
            </div>
            <div className="filter__container">
             <label className="filter__checkbox">
                <input type="checkbox" value="cap" onChange={handleCheckboxChange} /> 
                <img className="filter__img" src={IconCap} alt="6" />
                <span class="filter__text">Крышечки</span>
             </label>
            </div>
            </div>
    );
}

export default Filter;
