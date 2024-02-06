import Intro from "./components/Intro";
import Ratings from "./components/Ratings";
import Quotes from "./components/Quotes";
import quotes from "./quotes.js";
import "./sass/app.scss";

const App = () => {
  const displayQuotes = quotes.map((q) => {
    return <Quotes key={q.id} {...q} />;
  });

  return (
    <>
      <div className="container">
        <main>
          <Intro />
          <Ratings />
          <ul className="quotes split">{displayQuotes}</ul>
        </main>
      </div>
    </>
  );
};

export default App;
