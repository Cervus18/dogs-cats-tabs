import './App.css';
import Tab from './Components/JS/Tab';
import Page from './Components/JS/Page';

import { useState } from 'react';

function App() {

  const [tabs,setTabs] = useState([
    {id:1 , current:true, animal:"cat",content:"CAT"},
    {id:2, current:false, animal:"dog",content:"DOG"},
    //{id:3, current:false, animal:"bird",content:"BIRD"},
  ])
  
  
  return (
    <div className="App">
      <div className="container">
        <header>
           {
             tabs.map(tab=>
                  <Tab tabs={tabs} setTabs={setTabs} key={tab.id} id={tab.id} title={tab.animal} current={tab.current}/>
             )
           }
           
        </header>
        <div className="interface">
           {tabs.map(tab => <Page key={tab.id} tab={tab}/>)}
        </div>
    </div>
    </div>
  );
}

export default App;
