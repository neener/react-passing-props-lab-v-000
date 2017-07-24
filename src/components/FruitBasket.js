import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

  function FruitBasket(props){
    return (
      <div className="fruit-basket">
        <FilteredFruitList
          fruit={props.list} filter={props.filter} />
      </div>
    );
  }

  FruitBasket.defaultProps = {
    fruit: [],
    filters: [],
    currentFilter: null,
    updateFilterCallback: () => {}
  }

export default FruitBasket;
