import React from "react";

import { Typography } from "@material-ui/core";
import { fetchData } from "./api";
import Cards from "./components/Cards/Cards";
import styles from "./App.module.css";

class App extends React.Component {
  state = {
    data: {},
  };

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  render() {
    const { data } = this.state;

    return (
      <div className={styles.container}>
        <Typography variant="h4">COVID-19 Tracker</Typography>
        <Cards data={data} />
      </div>
    );
  }
}

export default App;
