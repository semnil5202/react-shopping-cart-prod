import { Link } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { cartCountState, serverNameState } from '../../recoil/state';
import { SERVER_NAMES } from '../../constants';
import { ServerNameType } from '../../types';

export default function Header() {
  const cartCount = useRecoilValue(cartCountState);
  const [serverName, setServerName] = useRecoilState(serverNameState);

  const onChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setServerName(e.target.value as ServerNameType);
  };

  return (
    <Wrapper>
      <ContentBox>
        <HomeLink to="/">
          <img src="./logo.svg" />
          <LogoTitle>SHOP</LogoTitle>
        </HomeLink>
        <RightBox>
          <Select value={serverName} onChange={onChangeSelect}>
            {SERVER_NAMES.map((serverName) => (
              <option key={serverName}>{serverName}</option>
            ))}
          </Select>
          <CartLink to="/cart">
            장바구니
            <CartCount>{cartCount}</CartCount>
          </CartLink>
        </RightBox>
      </ContentBox>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  position: fixed;
  top: 0;

  display: flex;
  justify-content: center;

  width: 100%;
  height: 80px;

  background: #333333;

  color: white;
`;

const ContentBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 80%;
  height: 100%;
  padding: 0 16px;
`;

const HomeLink = styled(Link)`
  display: flex;
  align-items: center;

  font-size: 40px;
  font-weight: 900;
`;

const LogoTitle = styled.h1`
  margin-left: 24px;

  vertical-align: center;

  @media (max-width: 612px) {
    display: none;
  }
`;

const RightBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 224px;
`;

const Select = styled.select`
  width: 64px;
  border: none;
  border-radius: 4px;

  & > option {
    text-align: center;
  }
`;

const CartLink = styled(Link)`
  display: flex;

  font-size: 24px;
  font-weight: 500;
`;

const CartCount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 28px;
  height: 28px;
  margin-left: 8px;
  border-radius: 50%;

  background: #04c09e;

  font-size: 14px;
  font-weight: 700;
`;
