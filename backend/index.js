const express = require("express");
const port = 4300;
const app = require("./server/app");

app.listen(port, () =>
  console.log(`Connecting Server Successfully on ${port} port`)
);
