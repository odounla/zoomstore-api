const getAllUsers = async (req, res) => {
  res.send("get all users route");
};

const getSingleUser = async (req, res) => {
  res.send("get singleuser route");
};

const showCurrentUser = async (req, res) => {
  res.send("show current user");
};

const updateUser = async (req, res) => {
  res.send("update user");
};

const updateUserPassword = (async) => {
  res.send("update user password");
};

module.exports = {
  getAllUsers,
  getSingleUser,
  showCurrentUser,
  updateUser,
  updateUserPassword,
};
