
let api = "https://josephchamul-imagequiz.herokuapp.com/";

let server = {
  fetchQuizzes: () => {
    return fetch(api + "quizzes").then((x) => x.json());
  },
  fetchQuiz1: () => {
    return fetch(api + "questions/1").then((x) => x.json());
  },
  fetchQuiz2: () => {
    return fetch(api + "questions/2").then((x) => x.json());
  },
  fetchQuiz3: () => {
    return fetch(api + "questions/3").then((x) => x.json());
  },
  postScore: (score, username, quizid) => {
    let data = { score: score, username: username };
    fetch(api + "score", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((x) => x.json())
      .then((y) => console.log(y))
      .catch((e) => console.log(e));
  },
};

export default server;
