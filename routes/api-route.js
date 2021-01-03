// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data"
// ===============================================================================

const database = require("../Develop/db/db.json");
const fs = require("fs");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/notes", function(req, res) {
    fs.readFile("../Develop/db/db.json", "utf8", function (err, data) {
      if (err) {
        console.log(err)
      }
      else {
        newNotes = JSON.parse(data);
      }
    } )
    res.json(newNotes);
  });

  // API POST Requests
  // ---------------------------------------------------------------------------

  app.post("/api/notes", function(req, res) {

    let entry = {
      title: req.body.title,
      text: req.body.text
    }
  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    tableData.length = 0;
    waitListData.length = 0;

    res.json({ ok: true });
  });
};