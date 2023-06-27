import SinaComponent from "./SinaComponent";
import ShimaComponent from "./ShimaComponent";
import LogingFormComponent, { LoginHOC } from "./LogingFormComponent";

function App() {
  return (
    <div className="App">
      <SinaComponent />
      <ShimaComponent />
      <LogingFormComponent />
    </div>
  );
}

export default App;
