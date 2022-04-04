import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [userDollar, setUserDollar] = useState(0);
  const [coins, setCoins] = useState([]);

  const onDollarChange = (event) => {
    setUserDollar(event.target.value);
  };

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>The coins! {coins.length}</h1>
      {loading ? (
        <div>
          <strong>loading....</strong>
          <hr />
        </div>
      ) : null}

      <input
        onChange={onDollarChange}
        value={userDollar}
        type="number"
        placeholder="how many USD do you have?"
      ></input>

      <div>
        <select>
          {coins.map((item) => (
            <option key={item.id}>
              You can get {userDollar * (1 / item.quotes.USD.price)} {item.name}{" "}
              ({item.symbol})
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default App;
