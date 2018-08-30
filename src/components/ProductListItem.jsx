import React, { Component } from 'react';

import { connect } from "react-redux";
import { addToCart } from "../modules/action";


 class ShoppingListItem extends Component {
 	render() {
		  const { items, addToCart } = this.props;
 		return  (<div className="">
			{items.map(product => (
				<li key={product.id}>
					<p>
						{product.title} ,{product.price},{product.inventory}
					</p>
					<button className="btn btn-dark" onClick={() => addToCart(product)}>
						{product.inventory ? "Add ToCart" : "Sold Out"}
					</button>
					<hr />
				</li>
			))}
		</div>
 	)}
 }


const mapStoreToProps = store =>({
  items: Object.values(store.products)

});

const mapActionsToProps = {
  addToCart: addToCart
};

export default connect(
  mapStoreToProps,
  mapActionsToProps
)(ShoppingListItem);
