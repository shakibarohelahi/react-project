import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcepts";
import Examples from "./components/Examples";

function App() {
  return (
    <div>
      <usersjson />
      <Header />
      <CoreConcepts />
      <main>
        <Examples />
      </main>
    </div>
  );
}

export default App;
