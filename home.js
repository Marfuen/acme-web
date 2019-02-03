

module.exports = (content, pages) => `
  <html>
    <head>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
      <title>Acme Web</title>
    </head>
    <body>
    <div class="container">
      <h1>Acme Web</h1>
      <ul class="nav nav-tabs" style="margin-bottom: 20px">
        ${pages.map(page => `
        <li class="nav-item"><a href="/pages/${page.id}" class="nav-link active">${page.name}</a></li>
      `).join('')}
      </ul>
      ${content.map(el => `
        <h1>${el.content_name}</h1>
        <p>${el.body}
      `).join('')}
    </div>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js">
    </body>
  </html>
`
