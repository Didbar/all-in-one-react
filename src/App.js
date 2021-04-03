import "./App.css";

import Rules from "./components/ReactRules/rules";
import AdvancedGuides from "./components/AdvancedGuides/advancedGuides";
import Components from "./components/components";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1 className="header__title">Learning React From React JS Org</h1>
      </header>
      <main className="main">
        <Rules />
        <Components />
        <AdvancedGuides />
      </main>
    </div>
  );
}

export default App;
