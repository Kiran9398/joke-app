import React, { useState, useEffect } from "react";

const Homepage = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    fetch(
      "https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10"
    )
      .then((response) => response.json())
      .then((data) => {
        setJokes(data.jokes || [data]);
      })
      .catch((error) => console.error("Error fetching jokes:", error));
  }, []);

  return (
    <div className="container mt-5">
      <h2>Jokes</h2>
      <table className="table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Jokes</th>
          </tr>
        </thead>
        <tbody>
          {jokes.map((joke, index) => (
            <tr key={joke.id}>
              <td>{index + 1}</td>
              <td>{joke.joke || joke.setup + " " + joke.delivery}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Homepage;
