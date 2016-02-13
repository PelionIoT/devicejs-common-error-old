var errs = require("./index.js");

console.dir(errs);

console.log("Code was 521: ",errs.HTTP.byStatus[""+521]);
console.log("Code was 521: ",errs.HTTP.byStatusText["No account tied to user"]);
console.log("shortCode: ",errs.HTTP.shortCode['NO_ACCOUNT'].status,errs.HTTP.shortCode['NO_ACCOUNT'].statusText);
