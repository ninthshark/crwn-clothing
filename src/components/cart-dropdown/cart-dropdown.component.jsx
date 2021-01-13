import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import CustomButton from "../custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className='empty-message'>Empty Cart</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        Go to Checkout
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
