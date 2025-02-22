
import { validateToken } from "../services/auth.js"

export function checkAuthentication(req, res, next) {
    const token = req.cookies['token']
    // Ensure cookie-parser is used

    if (!token) {
        return res.redirect('/register'); // Redirect if no token is found
    }

    try {
        const decoded = validateToken(token) // Validate token
        req.user = decoded; // Attach user data to request
        next(); // Proceed to next middleware/route
    } catch (error) {
        console.error('Invalid token:', error.message);
        res.clearCookie('token'); // Remove invalid token
        return res.redirect('/login'); // Redirect to login
    }
}