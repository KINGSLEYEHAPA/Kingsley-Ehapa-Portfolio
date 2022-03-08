import { createStore } from "redux";
import myPortfolioReducer from "./reducer/myPortfolioReducer";

const store = createStore(myPortfolioReducer);

export default store;
