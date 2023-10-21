import './App.css';
import { StateAndEffectComponent } from "./components/StateAndEffectComponent";
import { MemoAndCallbackComponent } from "./components/MemoAndCallbackComponent";
import { ContextAndReducerComponent } from "./components/ContextAndReducerComponent";
import { CustomHooksComponent } from "./components/CustomHookComponent";

function App() {
  return (
    <div className="App">
      <StateAndEffectComponent />
      <MemoAndCallbackComponent />
      <ContextAndReducerComponent />
      <CustomHooksComponent />
    </div>
  );
}

export default App;
