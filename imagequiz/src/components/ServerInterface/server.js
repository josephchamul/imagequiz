let getEntries = () => {
  let entries = {
    name: "develop",
    origin: "dis + envelop",
    meanings: [{ type: "verb", meaning: "more advance" }],
  };
  return entries;
};
let server = {
  fetchEntries: getEntries,
};

export default server;
