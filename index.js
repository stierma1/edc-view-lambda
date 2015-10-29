"use strict"

var Worker = require("basic-distributed-computation").Worker;

class ViewLambda extends Worker {
  constructor(parent){
    super("view-lambda", parent);
  }

  work(req){
    if(req.body.id === "test"){
      req.body.view = "test succeed";
      req.next();
    } else {
      req.status("Not Found").next();
    }
  }
}

module.exports = ViewLambda;
