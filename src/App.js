import "./App.scss";
import OrgOne from "./org-one/OrgOne";
import OrgTwo from "./org-two/OrgTwo";

// import { Tree } from "primereact/tree";
// import { NodeService } from "../service/NodeService";

function App() {
  return (
    <div className="App">
      <OrgOne />
      <OrgTwo />

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Tree
          value={nodes}
          dragdropScope="demo"
          onDragDrop={(event) => setNodes(event.value)}
        />
      </header> */}
    </div>
  );
}

export default App;
