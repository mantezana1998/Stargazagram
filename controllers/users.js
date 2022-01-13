const User = require('../models/users');
const { v4: uuidv4 } = require('uuid');
const S3 = require('aws-sdk/clients/s3');
const s3 = new S3();
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

module.exports = {
    signup
}

async function signup(req, res) {
    console.log(req.body, req.file, '<req.body, req.file in our signup, because we have multer');
    const filepath = `${uuidv4()}/${req.file.originalname}`;
    const params = {
        Bucket: process.env.BUCKET_NAME,
        Key: filepath,
        Body: req.file.buffer,
    };

    s3.upload(params, async function (err, data){
        console.log(err, '<- err from aws, are your keys and bucket correct?')
        const user = new User({...req.body, photoUrl: data.Location});
        try {
            await user.save();
            const token = createJWT(user)
            res.json({token});
        }catch (err) {
            console.log(err, '<- err signup controller function');
            res.status(400).json({err})
        }
    });
}

function createJWT(user){
    return jwt.sign(
        {user},
        SECRET,
        {expiresIn: '24h'}
    );
}