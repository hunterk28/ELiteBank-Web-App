import jwt from 'jsonwebtoken';

const userAuth = async (req, res, next) => {
    const { token } = req.cookies;

    if (!token) {
        return res.json({ success: false, message: 'Not authorized, login again' });
    }

    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

        if (tokenDecode.id) {
            // Maintain backward compatibility
            req.user = { 
                userId: tokenDecode.id,  // Keep for existing routes
                _id: tokenDecode.id,    // Add for transactions
                email: tokenDecode.email // Add for transactions
            };
        } else {
            return res.json({ success: false, message: 'Not authorized, login again' });
        }

        next();
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

export default userAuth;