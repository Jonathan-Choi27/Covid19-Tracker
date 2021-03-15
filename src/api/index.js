import axios from "axios";

const url = "https://api.covid19api.com";

export const fetchData = async () => {
  try {
    const {
      data: {
        Global: { Date, TotalConfirmed, TotalDeaths, TotalRecovered },
      },
    } = await axios.get(url + "/summary");

    return {
      TotalConfirmed,
      TotalDeaths,
      TotalRecovered,
      lastUpdate: Date,
    };
  } catch (error) {
    console.log(error);
  }
};
