import './App.css';
import Component1 from './Component1';
import Counter from './Counter'
import PropsUse from './PropComponent'

// here we can have our data comming in from API: 
const incomingDataArr = [
  {name: "Dunk", variable2:'Slam' },
  {name: "Dunk", variable2:'Slammer' },
  {name: "Dunki", variable2:'Slam' }
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        This is App Component
      <Component1/>
      <Counter/>
      {/* instead of calling the Component 10 times we can use map() */}
      {/* <PropsUse name='Dunk' variable2='Slam'/>
      <PropsUse name='Dunk' variable2='Slammer'/>
      <PropsUse name='Dunki' variable2='Slam'/> */}
      {// since its a JS we will enclose it in {}
        incomingDataArr.map(
          (dataItem) =>  {
            const {name, variable2} = dataItem
            return (
              <PropsUse name={name} variable2={variable2}/>
            )
          }
        )
      }
      </header>
    </div>
  );
}

export default App;
