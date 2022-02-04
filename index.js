const express = require("express");
const app = express();
const inertia = require("inertia-node");
const port = 3000;

app.use(express.static("public"));

const html = (pageString, { viewData }) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />

    <!-- Custom data -->
    <title>${viewData.title}</title>

    <!-- Your React, Vue or Svelte SPA -->
    <link rel="stylesheet" href="/build/bundle.css" />
    <script defer type="module" src="/js/app.js"></script>
  </head>

  <!-- The Inertia page object -->
  <body id="app" data-page='${pageString}'></body>
</html>
`;

app.use(inertia(html, "1"));

app.get("/", (req, res) => {
  req.Inertia.setViewData({ title: "Home" }).render({
    component: "Home",
    props: { username: "ironman" },
  });
});

app.listen(port, () => {
  console.log(`Listening app on port ${port}`);
});
