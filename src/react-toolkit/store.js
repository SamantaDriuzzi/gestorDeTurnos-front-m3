import { configureStore} from "@reduxjs/toolkit";
import { userSlice } from "./reducer";
// import reducer from "./reducer";
// 
// const rootReducer = combineReducers({
//   user: reducer,
// });
// 
const store = configureStore({
  reducer: userSlice.reducer,
});



export default store;
