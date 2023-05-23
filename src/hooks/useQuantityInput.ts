import { useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import * as api from '../api';
import { cartState, serverNameState } from '../recoil/state';
import { API_ERROR_MESSAGE } from '../constants';

const useQuantityInput = (cartItemId: number) => {
  const [input, setInput] = useState('');
  const setCart = useSetRecoilState(cartState);
  const serverName = useRecoilValue(serverNameState);

  const getCart = async () => {
    try {
      const cart = await api.getCart(serverName);
      setCart(cart);
    } catch {
      alert(API_ERROR_MESSAGE.getCart);
    }
  };

  const deleteCartItem = async () => {
    try {
      await api.deleteCartItem(serverName, cartItemId);
    } catch {
      alert(API_ERROR_MESSAGE.deleteCartItem);
      return;
    }

    getCart();
  };

  const patchCartItemQuantity = async (quantity: number) => {
    try {
      await api.patchCartItemQuantity(serverName, cartItemId, quantity);
    } catch {
      alert(API_ERROR_MESSAGE.postCartItem);
    }

    getCart();
  };

  const setInputWithRequest = async (quantity: number) => {
    if (quantity === 0) {
      deleteCartItem();
    } else {
      patchCartItemQuantity(quantity);
    }

    setInput(quantity.toString());
  };

  return { input, setInput, setInputWithRequest };
};

export default useQuantityInput;
