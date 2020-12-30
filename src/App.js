import "./App.css";

function Helloword() {
  return <div className="hello">Hello word</div>;
}

function App() {
  return (
    <div>
      This is my component: <Helloword></Helloword>
      <Helloword> </Helloword>
      <Helloword> </Helloword>
    </div>
  );
}

export default App;
