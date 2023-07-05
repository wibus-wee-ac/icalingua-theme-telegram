import ogs from "open-graph-scraper";

const args = process.argv.slice(2);
const url = args[0];
if (!url) {
  console.log("Please provide a URL");
  process.exit(1);
}
const options = { url, timeout: 4000 };
ogs(options)
  .then((data) => {
    console.log(JSON.stringify(data.result));
    process.exit(0);
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
