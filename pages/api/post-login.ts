import axios from "axios";

interface LoginInfo {
  username: string;
  password: string;
}

axios
  .post("https://61e6897fce3a2d0017359232.mockapi.io/login", {
    username: "Joey37",
    password: "dfwJ5KpAlk9n_p5"
  })
  .then((response) => {
    console.log(response.data);
  });

/**
   * Home.getInitialProps = async function () {
  // fetch('https://api.tvmaze.com/search/shows?q=batman')
  // const data = await res.json()
  const res = await axios.get("https://api.tvmaze.com/search/shows?q=batman");
  const data = await res.data;

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    data: data
  };
};
   */
