import React from 'react';

const FilterBar = () => {
  return (
    <div className="filter-bar-wrapper">
      <div className="breadcrumb">
        <span>Home</span> &gt; <strong>New In</strong>
      </div>
      
      <div className="controls-row">
        <div className="dropdowns">
          <select className="filter-select">
            <option>Filter by</option>
          </select>
          <select className="filter-select">
            <option>Recommended</option>
          </select>
          <span className="item-count">297 items</span>
        </div>

        <div className="grid-toggles">
          {/* Icons placeholders as per image_1cb638.png */}
          <span className="grid-icon">▯</span>
          <span className="grid-icon">▯▯</span>
          <span className="grid-icon">▯▯▯</span>
          <span className="grid-icon">田</span>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;