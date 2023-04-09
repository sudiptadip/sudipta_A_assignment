const { newusers } = require("../models/user");

const createANewAccount = async (req, res) => {
  const { name, email, bio = "", url } = req.body;
  try {
    const existingUser = await newusers.findOne({ email });
    if (existingUser)
      return res.status(400).send({ message: "User already exist" });

    const result = await newusers.create({
      email,
      name,
      bio,
      url: "",
    });
    res.status(200).send({ result });
  } catch (error) {
    res.status(500).send({ mesage: "something went wrong" });
  }
};

const findUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await newusers.findOne({ _id: id });
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send({ mesage: "No user found" });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const user = req.body;
  try {
    const updateuseer = { ...user, updated_at: new Date() };
    await newusers.updateOne({ _id: id }, { $set: updateuseer });
    const updatuser = await newusers.findOne({ _id: id });
    res.send(updatuser);
  } catch (error) {
    res.send({ message: "user not found" });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await newusers.findByIdAndDelete(id);
    res.send("delete successfuly done");
  } catch (error) {
    res.send({ message: "user not found" });
  }
};

const findAllUser = async (req, res) => {
  try {
    const allUser = await newusers.find();
    res.send(allUser);
  } catch (error) {
    res.send("something went wrong");
  }
};

module.exports = {
  createANewAccount,
  findUserById,
  updateUser,
  deleteUser,
  findAllUser,
};

// const signin = async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const existingUser = await newusers.findOne({ email });
//     if (!existingUser)
//       return res.status(404).send({ message: "User dose not exist" });

//     const isPasswordCorrect = await bcrypt.compare(
//       password,
//       existingUser.password
//     );
//     if (!isPasswordCorrect)
//       return res.status(400).send({ message: "Invalid credentials" });

//     const token = jwt.sign(
//       { email: existingUser.email, id: existingUser._id },
//       "secret_key",
//       { expiresIn: "1h" }
//     );
//     res.status(200).send({ result: existingUser, token });
//   } catch (error) {
//     res.status(500).send({ mesage: "something went wrong" });
//   }
// };
