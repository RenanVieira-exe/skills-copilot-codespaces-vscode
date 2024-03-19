// Create new server
var server = http.createServer(function (req, res) {
  // Handle errors
  req.on('error', function(err) {
    console.error(err);
    res.statusCode = 400;
    res.end();
  });
  res.on('error', function(err) {
    console.error(err);
  });
  // Set response header
  res.setHeader('Content-Type', 'application/json');
  // Set response body
  res.write(JSON.stringify({
    comments: [