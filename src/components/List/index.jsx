import React, { Component } from 'react';
import { array } from 'prop-types';
import ListItem from '../ListItem';
import Filters from '../Filters';
import Nav from '../Nav';
import {Helmet} from "react-helmet";
import './style.scss';

class List extends Component {
  priceLevels = [25, 50, 100, 200];
  state = {
    visibleItems: this.props.items,
    maxPrice: 0,
  };

  setMaxPrice = (price) => {
    const { items } = this.props;

    this.setState({
      maxPrice: price,
      visibleItems: price ? items.filter(item => item.price <= price) : items,
    });
  };

  render() {
    const { visibleItems } = this.state;

    return (
      <div className="List__container">
        <Nav title="Top wines">
          <Filters
            className="Nav__filters"
            levels={this.priceLevels}
            onFilterChange={this.setMaxPrice}
            selectedValue={this.state.maxPrice}
          />
        </Nav>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{this.props.name}</title>
        </Helmet>
        <ul className="List">
          {visibleItems.length ? visibleItems.map(item => (
            <ListItem key={item.id} {...item} />
          )) : (
            <li className="List__empty">No items found.</li>
          )}
        </ul>

      </div>
    );
  }
}

List.propTypes = {
  wines: array,
};

export default List;
