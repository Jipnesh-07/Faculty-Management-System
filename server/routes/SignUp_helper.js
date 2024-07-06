import express from 'express'
const Router = express.Router();
import User from '../models/User';


Router.post('/signup', async(req, res) => {
    try {
        const newUser = await User.create(({
            name : req.body.name,
            email : req.body.email,
            password : req.body.password
        }));

        res.json({success : true, newUser});
    } catch (error) {
        console.log(error.message);
    }
});

export default Router;