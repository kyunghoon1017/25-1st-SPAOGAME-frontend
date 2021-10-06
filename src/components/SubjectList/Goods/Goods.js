import React, { Component } from 'react';

class Goods extends Component {
  render() {
    const { name, price, review_count, image } = this.props.item;
    return (
      <li className="subject">
        <div className="image_wrapper">
          <img src={image} />
        </div>
        <div className="description">
          <div className="name_heart_wrapper">
            <span className="subject_name">{name} </span>
            <span className="heart">
              <i class="far fa-heart"></i>
            </span>
          </div>
          <div className="subject_price">{price}</div>
          <div class="review_count">{`리뷰 ${review_count} 건`}</div>
        </div>
      </li>
    );
  }
}

export default Goods;
