import { createStore } from "redux";

import reducer from "./reducer";

export default function configureStore() {
  const store = createStore(reducer);

  window.store = store;

  return store;
}
