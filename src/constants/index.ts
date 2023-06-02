import type { ServerNameType } from '../types';

export const LOCAL_STORAGE_KEY = {
  cart: 'cart',
  serverName: 'serverName',
};

export const MAX_QUANTITY = 1000;

export const MOCK_URL = 'https://backend';

export const SKELETONS_LENGTH = 8;

export const API_SUCCESS_MESSAGE = {
  postCartItem: '장바구니에 상품을 담았어요.',
  patchCartItemQuantity: '선택한 상품의 수량을 변경했어요.',
  deleteCartItem: '장바구니에서 상품을 제외했어요.',
  signUp: '회원가입을 완료했어요.',
  login: '로그인을 완료했어요.',
};

export const API_ERROR_MESSAGE = {
  getProducts: '상품 목록을 가져오지 못했어요. 새로고침을 해주세요.',
  getCart: '장바구니 목록을 가져오지 못했어요. 새로고침을 해주세요.',
  postCartItem: '상품을 추가하지 못했어요. 잠시 후 다시 시도해주세요.',
  patchCartItemQuantity: '선택한 상품의 수량을 변경하지 못했어요. 잠시 후 다시 시도해주세요.',
  deleteCartItem: '상품 삭제를 못했어요. 잠시 후 다시 시도해주세요.',
  signUp: '회원가입을 실패했어요. 잠시 후 다시 시도해주세요.',
  login: '로그인에 실패했어요. 잠시 후 다시 시도해주세요.',
  coupon: '쿠폰을 받아오는데 실패했어요. 잠시 후 다시 시도해주세요.',
};

export const SERVER_NAMES: ServerNameType[] = ['RAON', 'JOURNY', 'ZUNY'];

export const BASE_URL_MAP: Record<ServerNameType, string> = {
  RAON: 'https://jourzura.kro.kr',
  JOURNY: 'http://journey-shop.kro.kr:8080',
  ZUNY: 'https://jourzura2.kro.kr',
};

export const USER_ID = 'a@a.com';
export const USER_PASSWORD = '1234';
