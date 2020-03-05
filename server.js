const express = require("express");
const bodyparser = require("body-parser");
const port = process.env.PORT || 3000;

const app = express();

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json({
    verify: (req, res, buf) => {
      req.rawBody = buf
    }
  }))

require("./routes/employee_route")(app);
require("./routes/visitor_route")(app);


app.listen(port, () => console.log(`Server started on ${port}`));