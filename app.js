express = require("express");
app = express();
open = require("open");
bodyParser = require("body-parser");

port = 3000;

/**Adding external files to the project */
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));

/**Setting EJS as view engine */
app.set('view engine', 'ejs');

/**
 * Calling express server on root URL ("/")
 */
app.get("/", function (request, response) {
  /**rendering index.ejs file */
  response.render("index");
});

app.listen(port, function () {
  //console.log(`Listening on port ${port}!`);
  console.log("Listening on port" + port);
});

/**setting up POST request*/
app.post("/", function (request, response) {
  /**rendering index.ejs file */
  response.render("index");
  console.log(request.body.position);
});

/**Launching browser */
open("http://localhost:" + port);

/**
 * Renders HORIZONTAL bar charts into demo page
 * @param {array of numbers} data - the data the chart should work
 * from Start with just an Array of numbers
 * e.g. [1, 2, 3, 4, 5]
 * @param {object} options - should be an object which has options for the chart.
 * e.g. width and height of the bar chart
 * @param {Dom / jQuery element} element - element that the chart will get rendered into
 * the page
  */
/*function drawBarChart(data, options, element) {

}*/
