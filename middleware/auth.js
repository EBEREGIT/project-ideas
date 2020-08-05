const jwt = require("jsonwebtoken");
const User = require("../database/model/users");

module.exports = async (request, response, next) => {
  try {
    //   get the token from the authorization header
    const token = await request.headers.authorization.split(" ")[1];

    //check if the token matches the supposed origin
    const decodedToken = await jwt.verify(
      token,
      "AKWA_OKWUKWO_TIBE_AKI_IFE_DI_ABUO_OTU_GA_EME"
    );

    // retrieve the user details of the logged in user
    const user = await decodedToken;

    // pass the the user down to the endpoints here
    request.user = user;
    next();
  } catch {
    response.status(401).json({
      error: new Error("Invalid request!"),
    });
  }
};
