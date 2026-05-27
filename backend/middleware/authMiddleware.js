const jwt = require("jsonwebtoken");

const protectAdmin = async (req, res, next) => {

  try {

    let token;

    // CHECK TOKEN

    if (

      req.headers.authorization &&

      req.headers.authorization.startsWith("Bearer")

    ) {

      token = req.headers.authorization.split(" ")[1];

    }

    // NO TOKEN

    if (!token) {

      return res.status(401).json({

        success: false,
        message: "Unauthorized access"

      });

    }

    // VERIFY TOKEN

    const decoded = jwt.verify(

      token,
      process.env.JWT_SECRET

    );

    // SAVE ADMIN ID

    req.admin = decoded.id;

    next();

  }

  catch (error) {

    return res.status(401).json({

      success: false,
      message: "Invalid token"

    });

  }

};

module.exports = protectAdmin;