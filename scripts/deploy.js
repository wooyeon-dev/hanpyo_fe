const ghPages = require("gh-pages");
const paths = require("../config/paths");

ghPages.publish(
  paths.buildPath,
  {
    branch: "release",
    depth: 0,
    message: "chore: 빌드산출물 추가"
  },
  (err) => {
    // eslint-disable-next-line no-console
    console.error(err);
    throw new Error(err);
  }
);
