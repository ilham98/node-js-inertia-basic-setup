module.exports = (pageString, { viewData }) => `
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
