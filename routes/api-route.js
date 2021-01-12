// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data"
// ===============================================================================

const fs = require("fs");
const database = require("../Develop/db/db.json")



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
    res.json(database);
  });

  // API POST Requests
  // ---------------------------------------------------------------------------

  app.post("/api/notes", function(req, res) {

    let entry = {
      title: req.body.title,
      text: req.body.text
    }
    console.log("I'm working!!")
  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  app.delete("/api/notes/:id", function(req, res) {
    // Empty out the arrays of data
    tableData.length = 0;
    waitListData.length = 0;

    res.json({ ok: true });
  });
};