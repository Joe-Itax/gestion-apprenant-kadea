const bcrypt = require("bcrypt");

const hashPwd = async function (pwd) {
  return bcrypt.hashSync(pwd, 10);
};

const comparePwd = async function (pwd, pwdHashed) {
  return bcrypt.compareSync(pwd, pwdHashed);
};

module.exports = {
  hashPwd,
  comparePwd,
};
