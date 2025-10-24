const backendUrlStartingPoint = "http://localhost:7500/api";

const Signup = () => {
  try {
    fetch(backendUrlStartingPoint + "/signup")
      .then((res) => {
        console.log(res.json());
      })
      .catch(() => {});
  } catch (err) {
    console.error("Something went wrong", err);
  }
};
