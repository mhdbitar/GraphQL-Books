const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Allow cross-origin request
app.use(cors());

// Connect to mlab database
mongoose.connect("mongodb://mohamad:test123@ds153947.mlab.com:53947/gql-ninja");
mongoose.connection.once("open", () => {
  console.log("Connected to database");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log("Server is up and running on port: 4000");
});
