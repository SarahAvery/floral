const ghpages = require("gh-pages");
const chalk = require("chalk");

ghpages.publish("dist", (err) => {
  if (err) throw new Error(err);

  console.log(chalk.green("Published to gh-pages :D"));
});
