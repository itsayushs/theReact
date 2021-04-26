import './App.css';
import Component1 from './Component1';
import Counter from './Counter'
import PropsUse from './PropComponent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        This is App Component
      <Component1/>
      <Counter/>
      <PropsUse name='Dunk'/>
      </header>
    </div>
  );
}

export default App;
