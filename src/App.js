import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {publicRouter} from './routers/'
import {DefaultLayout} from './components'
function App() {
  return (
    <Router>
      <Routes>
        {publicRouter.map((item, index)=>{
          const Componet = item.componet;
          let Layout = DefaultLayout;
          if(item.layout){
            Layout = item.layout;
          }

          return(
            <Route 
              key={index} 
              path={item.path} 
              element={
                <Layout>
                  <Componet/>
                </Layout>
              }
            ></Route>
          ) 
        })}
      </Routes>
    </Router>
  );
}

export default App;
