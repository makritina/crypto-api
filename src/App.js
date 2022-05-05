import CurrencyConv from "./components/CurrencyConv";
import NewsFeed from "./components/NewsFeed";
import ExchangeRate from "./components/ExchangeRate";

const App = () => {
  return (
    <div className="app">
      <CurrencyConv />
      <NewsFeed />
    </div>
  );
};

export default App;
