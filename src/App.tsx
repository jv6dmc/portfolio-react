import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './App.scss';
import {Layout} from "./components/layout/layout";
import {Image} from "./components/image/image";
import LoremIpsum from "react-lorem-ipsum";
import profile from './assets/profile.jpg';
import {Timeline} from "./components/timeline/timeline";
import {Animations, FullPage, Stuff} from "./pages";

function App() {
  return (
      <Router>
          <div>
              <nav>
                  <ul>
                      <li>
                          <Link to="/">Home</Link>
                      </li>
                      <li>
                          <Link to="/stuff">Suff</Link>
                      </li>
                      <li>
                          <Link to="/animations">Animations</Link>
                      </li>
                      <li>
                          <Link to="/fullpage">Full Page</Link>
                      </li>
                  </ul>
              </nav>

              {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
              <Switch>
                  <Route path="/stuff">
                      <Stuff />
                  </Route>
                  <Route path="/animations">
                      <Animations />
                  </Route>
                  <Route path="/fullpage">
                      <FullPage />
                  </Route>
                  <Route path="/">
                      <Layout title={"Nicolas Mc Clure"}>
                          <Image imgUrl={profile}
                                 text={<LoremIpsum/>}
                                 textPosition={"right"}
                          />
                          <Timeline/>
                      </Layout>
                  </Route>
              </Switch>
          </div>
      </Router>
  );
}

export default App;
