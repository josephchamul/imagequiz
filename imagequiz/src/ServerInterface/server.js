let getEntries = () => {
  let entries = [
    [
      {
        picture: "daffodil.png",
        correct: "Daffodil",
        answers: ["Daisy", "Lily", "Daffodil", "Tulip"],
      },
      {
        picture: "daisy.jpg",
        correct: "Daisy",
        answers: ["Daisy", "Lily", "Daffodil", "Tulip"],
      },
      {
        picture: "cherryblossom.png",
        correct: "Cherryblossom",
        answers: ["Daisy", "Lily", "Daffodil", "Cherryblossom"],
      },
      {
        picture: "tulip.png",
        correct: "Tulip",
        answers: ["Daisy", "Lily", "Daffodil", "Tulip"],
      },
      {
        picture: "sunflower.png",
        correct: "Sunflower",
        answers: ["Sunflower", "Lily", "Daffodil", "Cherryblossom"],
      },
      {
        picture: "rose.png",
        correct: "Rose",
        answers: ["Daisy", "Lily", "Rose", "Tulip"],
      },
    ],
    [
      {
        picture: "sunflower.png",
        correct: "Sunflower",
        answers: ["Daisy", "Sunflower", "Daffodil", "Tulip"],
      },
      {
        picture: "lily.jpg",
        correct: "Lily",
        answers: ["Daisy", "Lily", "Daffodil", "Tulip"],
      },
      {
        picture: "waterlily.png",
        correct: "Waterlily",
        answers: ["Daisy", "Sunflower", "Waterlily", "Tulip"],
      },
      {
        picture: "rose.png",
        correct: "Rose",
        answers: ["Daisy", "Lily", "Daffodil", "Rose"],
      },
      {
        picture: "daisy.jpg",
        correct: "Daisy",
        answers: ["Daisy", "Sunflower", "Waterlily", "Tulip"],
      },
      {
        picture: "tulip.png",
        correct: "Tulip",
        answers: ["Daisy", "Lily", "Tulip", "Rose"],
      },
    ],
    [
      {
        picture: "tulip.png",
        correct: "Tulip",
        answers: ["Daisy", "sunflower", "Daffodil", "Tulip"],
      },
      {
        picture: "lily.jpg",
        correct: "Daisy.jpg",
        answers: ["Daisy", "Lily", "Daffodil", "Tulip"],
      },
      {
        picture: "rose.png",
        correct: "Rose",
        answers: ["Daisy", "Lily", "Daffodil", "Rose"],
      },
      {
        picture: "cherryblossom.png",
        correct: "Cherryblossom",
        answers: ["Daisy", "Lily", "Daffodil", "Cherryblossom"],
      },
      {
        picture: "daffodil.png",
        correct: "Daffodil",
        answers: ["Daisy", "Lily", "Daffodil", "Tulip"],
      },
      {
        picture: "waterlily.png",
        correct: "Waterlily",
        answers: ["Daisy", "Sunflower", "Waterlily", "Tulip"],
      },
    ],
  ];
  return entries;
};

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
