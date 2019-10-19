import Client from 'shopify-buy';

import {
  SET_ADDING,
  SET_CHECKOUT,
  StoreActionTypes,
  StoreState,
} from '../store/store/types';

const client = Client.buildClient({
  storefrontAccessToken: `5d56822a7cfd0ee77b833b482f25e0c7`,
  domain: `mon-instant-precieux.myshopify.com`,
});

const initialState: StoreState = {
  client,
  adding: false,
  checkout: {
    id: ``,
    lineItems: [],
    webUrl: ``,
    paymentDue: ``,
  },
  products: [],
  shop: {},
};

const storeReducer = (
  state = initialState,
  action: StoreActionTypes
): StoreState => {
  switch (action.type) {
    case SET_ADDING:
      return {
        ...state,
        adding: action.value,
      };
    case SET_CHECKOUT:
      return {
        ...state,
        checkout: action.checkout,
      };
    default:
      return state;
  }
};

export default storeReducer;
