var User = require('./../models/User.js');

var admin = {
  name: 'admin',
  pass: 'pass',
  status: 'Administrator',
  permission: 20,
}

User.add(
  admin,
  function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Done");
    }
  });
