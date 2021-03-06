import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import toggleCartHidden from "./cart/cart.reducer";

export default combineReducers({
  user: userReducer,
  cart: toggleCartHidden,
});
