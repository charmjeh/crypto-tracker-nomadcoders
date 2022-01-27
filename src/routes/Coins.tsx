// import { useState, useEffect } from "react";

// React Query는 데이터를 캐시에 저장해두기떄문에,
// 한번 fetch 후 다시 같은 코인 리스트 페이지에 접근 시 Loading 화면이 보이지 않음
import { useQuery } from "react-query";

import { Link } from "react-router-dom";
import styled from 'styled-components';
import { fetchCoins } from "../api";

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CoinsList = styled.ul``;

const Coin = styled.li`
  background-color: white;
  color: ${(props) => props.theme.bgColor};
  border-radius: 15px;
  margin-bottom: 10px;
  a {
    display: flex;
    align-items: center;
    padding: 20px;
    transition: color 0.2s ease-in;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
text-align: center;
`

const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`

interface ICoin {
  id: string;
  name: string;
  symbol: string;
}

function Coins() {
  // useQuery(<Query Key : 고유 식별자>, <fetcher function>)
  const { isLoading, data } = useQuery<ICoin[]>("allCoins", fetchCoins);


  // 우리의 useState는 CoinInterface 모양일 것이다
  // const [coins, setCoins] = useState<CoinInterface[]>([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   (async () => {
  //     const reaponse = await fetch("https://api.coinpaprika.com/v1/tickers");
  //     const json = await reaponse.json();
  //     setCoins(json.slice(0, 100));
  //     setLoading(false);
  //   })();
  // }, [])

  return (
    <Container>
      <Header>
        <Title>코인</Title>
      </Header>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <CoinsList>
          {data?.slice(0, 100).map((coin) => (
            <Coin key={coin.id}>
              <Link
                to={{
                  pathname: `/${coin.id}`,
                  state: { name: coin.name }
                }}
              >
                <Img src={`https://cryptoicon-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`} />
                {coin.name} &rarr;
              </Link>
            </Coin>
          ))}
        </CoinsList>
      )}
    </Container>
  )
}

export default Coins;