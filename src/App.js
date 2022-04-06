import { makeStyles } from "@material-ui/core";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CoinPage from "./Pages/CoinPage";
import Header from "./components/Header";
import HomePage from "./Pages/HomePage";

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();

  return (
    // <BrowserRouter>
    //   <Header />
    //   <Routes className={classes.App}>
    //     <Route exact path="/" component={Homepage} />
    //     <Route path="/coins/:id" component={CoinPage} exact />
    //   </Routes>
    // </BrowserRouter>
    <Router>
      <div className={classes.App}>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/coins/:id" element={<CoinPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
