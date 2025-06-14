    const jwt = require('jsonwebtoken');
    require('dotenv').config();

    const middleware = (req, res, next) => {
        console.log("middleware running");

        const token = req.headers.authorization && req.headers.authorization.split(" ")[1];

        if (!token) {
            return res.status(401).json({ message: "Token doesn't exist" });
        }

        try {
        
            const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

        
            req.user = {
                id: decoded.id,
                name: decoded.name
            };

            console.log("User decoded:", req.user);
            next();  

        } catch (error) {
            return res.status(401).json({ message: "Invalid or expired token" });
        }
    };

    module.exports = middleware;
