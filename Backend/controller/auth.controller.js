const userService = require("../Services/user.service.js");
const jwtProvider = require("../config/jwtProvider.js");
const bcrypt = require("bcrypt");
const User = require("../models/user.model.js");
const cartService = require("../Services/cart.service.js");

const register = async (req, res) => {
  const { email } = req.body;
  try {
     const user1 = await User.findOne({email});
    if (user1) {
      return res
        .status(400)
        .send({ message: "User with this email already exists." });
    }

    const user = await userService.createUser(req.body);
    const jwt = jwtProvider.generateToken(user._id);

    await cartService.createCart(user);

    return res.status(200).send({ jwt, message: "Registration success" });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ error: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userService.getUserByEmail(email);
    if (!user) {
      return res
        .status(404)
        .send({ message: "User not found with email mm " + email });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).send({ message: "Invalid password" });
    }
    console.log(user._id);
    const jwt = jwtProvider.generateToken(user._id);
    return res.status(200).send({ jwt, message: "Login success" });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ error: error.message });
  }
};

module.exports = { register, login };
