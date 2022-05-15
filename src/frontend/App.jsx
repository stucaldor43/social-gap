import { useEffect } from "react";
import { Switch, Link, BrowserRouter as Router, Route } from "react-router-dom";
import AuthUserLayout from "./components/layout/AuthUserLayout";
import { useAuth } from "./hooks/use-auth";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import Registration from "./pages/Registration";

function App() {
  const auth = useAuth();

  useEffect(() => {
    auth.refresh();
  }, []);

  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/messages">Messages</Link>
          </li>
          <li>
            <Link to="/dashboard">Settings</Link>
          </li>
          <li>
            <Link to="/signup">Sign up</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/">
            <AuthUserLayout>
              <Home />
            </AuthUserLayout>
          </Route>
          <Route path="/post/new">
            <AuthUserLayout>
              <CreatePost />
            </AuthUserLayout>
          </Route>
          <Route path="/messages">
            <AuthUserLayout>
              <About />
            </AuthUserLayout>
          </Route>
          <Route path="/dashboard">
            <AuthUserLayout>
              <Dashboard />
            </AuthUserLayout>
          </Route>
          <Route path="/signup">
            <Registration />
          </Route>
          <Route path="/signin">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

export default App;
