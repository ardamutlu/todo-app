type Params = {
  meta: string;
  body: string;
  style: string;
  preloadedState: string;
  nonce: string;
  scripts: string;
};

const escape = (str: string) => {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
};

export const renderFullPage = ({ meta, body, style, scripts, preloadedState, nonce }: Params) => {
  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="Description" content="introducing SPA and SSR">
        <meta property="csp-nonce" content="${nonce}">
        ${meta}
        <link rel="manifest" href="/manifest.webmanifest">
        <style>
        .todo-loader {
          background-color: #f2f3f8;
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          width: 100%;
          z-index: 6001;
        }
        </style>
        <link href="https://fonts.googleapis.com/css?family=Ubuntu:400,500,700&display=swap" rel="stylesheet">
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/react-datepicker/2.9.6/react-datepicker.min.css"
        />
        ${style}
      </head>
      <body>
        ${body}
        <script nonce="${nonce}" id="initial-data" type="text/plain" data-json="${escape(
    preloadedState
  )}"></script>
        ${scripts}
      </body>
    </html>
  `.trim();
};
