import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { cartItemState } from '../../recoil/state';
import useQuantityInput from '../../hooks/useQuantityInput';
import { isNaturalNumberString } from '../../utils/validator';

interface Props {
  cartItemId: number;
  min?: number;
  max?: number;
  style?: React.CSSProperties;
}

export default function QuantityInput({ cartItemId, min = 0, max, style }: Props) {
  const cartItem = useRecoilValue(cartItemState(cartItemId));
  const { input, setInput, setInputWithRequest } = useQuantityInput(cartItemId);

  const getValidRange = (quantity: number) => {
    if (min > quantity) return min;
    if (max && max < quantity) return max;
    return quantity;
  };

  const onChangeInput = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    if (isNaturalNumberString(value)) {
      setInputWithRequest(getValidRange(Number(value)));
    } else if (value === '') {
      setInput(value);
    }
  };

  const onBlurInput = () => {
    if (input === '') setInputWithRequest(min);
  };

  const quantityIncrease = () => {
    setInputWithRequest(Number(input) + 1);
  };

  const quantityDecrease = () => {
    setInputWithRequest(Number(input) - 1);
  };

  useEffect(() => {
    if (cartItem) setInput(cartItem.quantity.toString());
  }, []);

  return (
    <Wrapper style={style}>
      <Input type="text" value={input} onChange={onChangeInput} onBlur={onBlurInput} />
      <CounterBox>
        <Counter onClick={quantityIncrease} disabled={Number(input) === max}>
          <img src="./arrowUp.svg" />
        </Counter>
        <Counter onClick={quantityDecrease} disabled={Number(input) === min}>
          <img src="./arrowDown.svg" />
        </Counter>
      </CounterBox>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;

  width: 72px;
  height: 36px;

  text-align: center;
  font-size: 16px;
`;

const Input = styled.input`
  width: 64%;
  height: 100%;
  border: 1px solid #dddddd;

  text-align: center;
  font-size: inherit;
  color: #333333;
`;

const CounterBox = styled.div`
  display: flex;
  flex-direction: column;

  width: 36%;
  height: 100%;
`;

const Counter = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 50%;
  border: 1px solid #dddddd;
  background: transparent;

  & > img {
    width: 48%;
    height: 32%;
  }

  &:disabled {
    background: rgba(0, 0, 0, 0.1);
    cursor: default;
  }

  &:disabled > img {
    visibility: hidden;
  }
`;
