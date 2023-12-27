import { MyProvider } from "context/MyContext";
import MyComponent from "components/MyComponent";

function App() {
  return (
    <MyProvider>
      <MyComponent />
    </MyProvider>
  );
}

export default App;
