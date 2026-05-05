const express = require('express');
const app = express();
const port = 3001;

const htmlHome = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>App Hello Pages</title>
  <style>
    body {
      font-family: 'Inter', system-ui, sans-serif;
      background: linear-gradient(135deg, #f6d365 0%, #fda085 100%);
      height: 100vh;
      margin: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #333;
    }
    .card {
      background: rgba(255, 255, 255, 0.9);
      padding: 40px;
      border-radius: 16px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      text-align: center;
      transition: transform 0.3s ease;
    }
    .card:hover {
      transform: translateY(-5px);
    }
    h1 {
      margin: 0;
      font-size: 2.5rem;
      color: #e65c00;
    }
    p {
      margin-top: 15px;
      font-size: 1.1rem;
      color: #555;
    }
  </style>
</head>
<body>
  <div class="card">
    <h1>App Hello Pages</h1>
    <p>Welcome to the main endpoint of the Express Server.</p>
  </div>
</body>
</html>
`;

const htmlMazhar = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>About Mazhar</title>
  <style>
    body {
      font-family: 'Roboto', system-ui, sans-serif;
      background: linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%);
      height: 100vh;
      margin: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #2c3e50;
    }
    .card {
      background: #ffffff;
      padding: 50px;
      border-radius: 20px;
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
      text-align: center;
      transition: transform 0.3s ease;
    }
    .card:hover {
      transform: translateY(-5px);
    }
    h1 {
      margin-top: 0;
      font-size: 3rem;
      color: #2980b9;
    }
    p {
      font-size: 1.2rem;
      color: #7f8c8d;
    }
  </style>
</head>
<body>
  <div class="card">
    <h1>About Mazhar Page</h1>
    <p>This is a custom page dedicated to Mazhar with beautiful CSS styling.</p>
  </div>
</body>
</html>
`;

app.get('/', (req, res) => {
    res.type('html');
    res.send(htmlHome);
});

app.get('/Mazhar', (req, res) => {
    res.type('html');
    res.send(htmlMazhar);
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});