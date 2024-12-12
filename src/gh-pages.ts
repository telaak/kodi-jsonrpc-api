import ghpages from "gh-pages";

ghpages.publish("docs", (err) => {
  console.log(err);
});
