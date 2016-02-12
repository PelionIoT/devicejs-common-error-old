var errs = require("./index.js");

console.dir(errs);

console.log("Code was 521: ",errs.HTTP.byStatus[""+521]);
console.log("Code was 521: ",errs.HTTP.byStatusText["No account tied to user"]);
