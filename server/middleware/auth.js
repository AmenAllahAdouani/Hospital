const jwt = require("jsonwebtoken");
const { Patient, Doctor, AdjointParat, Admin } = require("../database");

const authProtection = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
    
  ) {
    try {
      // Get token fron header
      token = req.headers.authorization.split(" ")[1];

      //Verify token
      const decoded = jwt.verify(token,"YourSuperSecretKeyHere");
      console.log(decoded);
      //Get User from the token
      if (decoded.PatientId) {
        req.user = await Patient.findByPk(decoded.PatientId);
      } 
      if (decoded.DoctorId) {
        req.user = await Doctor.findByPk(decoded.DoctorId);
      }
      if (decoded.AdjointId) {
        req.user = await AdjointParat.findByPk(decoded.AdjointId);
      }
      if (decoded.AdminId) {
        req.user = await Admin.findByPk(decoded.AdminId);
      }
      next();
    } catch (error) {
      res.status(401);
      res.send("Not authorized");
    }
  }

  if (!token) {
    res.status(401);
    res.send("Not authorized,no token ");
  }
};
module.exports = authProtection;
