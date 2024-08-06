import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?limit=10")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  const [inputMap, setInputMap] = useState();
  const selectOnChange = (event) => {
    const selectedOption = JSON.parse(event.target.value);
    setInputMap(selectedOption);
  };
  // console.log("inputMap ===>>",inputMap);

  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={selectOnChange}>
          {coins.map((coin, index) => (
            <option value={JSON.stringify(coin)} key={index}>
              {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD{" "}
            </option>
          ))}
        </select>
      )}
      <hr></hr>
      {inputMap === undefined ? null : (
        <input value={inputMap.symbol} readOnly disabled />
      )}

      {inputMap === undefined ? null : (
        <input value={inputMap.quotes.USD.price} readOnly disabled />
      )}
    </div>
  );
}
export default App;
