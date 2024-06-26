export const signup = async (req, res) => {
  res.status(200).json({
    message: "Signup successful",
  });
};

export const login = async (req, res) => {
  res.status(200).json({
    message: "login successful",
  });
};

export const logout = async (req, res) => {
  res.status(200).json({
    message: "logout successful",
  });
};
