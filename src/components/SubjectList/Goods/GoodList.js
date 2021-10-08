import React, { Component } from 'react';
import Goods from './Goods';
import './Good.scss';

class GoodList extends Component {
  render() {
    const { goods } = this.props;
    return (
      <>
        {goods.map(item => {
          const { name, price, review_count, image } = item;
          return (
            <Goods
              key={name}
              item={item}
              name={name}
              price={price}
              count={review_count}
              image={image}
            />
          );
        })}
      </>
    );
  }
}

export default GoodList;
