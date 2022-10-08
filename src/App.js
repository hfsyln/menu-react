import data from "./data"
import List from "./components/Lıst"
import Header from "./components/Header"


function App() {
  
  return (
    <div>
        <Header/>

        {data.map((item, index) => (
          <List 
          key={index} 
          item={item} />
          ))}
    </div>
  );
}

export default App;
