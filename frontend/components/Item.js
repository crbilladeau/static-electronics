import React, { Component } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import ItemTitle from './styles/ItemTitle';
import ItemStyles from './styles/ItemStyles';
import PriceTag from './styles/PriceTag';
import formatMoney from '../lib/formatMoney';
import DeleteItem from './DeleteItem';

class Item extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
  };

  render() {
    const truncate = (str, n) => {
      return str.length > n ? str.substr(0, n - 1) + '...' : str;
    };

    const { item } = this.props;
    return (
      <ItemStyles>
        <Link href={{ pathname: '/item', query: { id: item.id } }}>
          {item.image && <img src={item.image} alt={item.title} />}
        </Link>
        <ItemTitle>
          <a>{item.title}</a>
        </ItemTitle>
        <PriceTag>{formatMoney(item.price)}</PriceTag>
        <p>{truncate(item.description, 75)}</p>
        <div className='buttonList'>
          <Link
            href={{
              pathname: 'update',
              query: { id: item.id },
            }}
          >
            <a>Edit ✏️</a>
          </Link>
          <button>Add To Cart</button>
          <DeleteItem id={item.id}>Delete Item</DeleteItem>
        </div>
      </ItemStyles>
    );
  }
}

export default Item;
