const User = require("../models/users");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;
const { v4: uuidv4 } = require("uuid");
const S3 = require("aws-sdk/clients/s3");
const s3 = new S3(); 

module.exports = {
    signup,
    login
}

async function signup(req, res) {
    console.log(req.body, req.file, " <req.body, req.file in our signup, because we have multer");
    const filePath = `${uuidv4()}/${req.file.originalname}`;
    const params = {
      Bucket: process.env.BUCKET_NAME,
      Key: filePath,
      Body: req.file.buffer,
    };
  
    s3.upload(params, async function (err, data) {
      console.log(err, ' <- err from aws, are your keys and bucket correct?')
      const user = new User({...req.body, photoUrl: data.Location});
      try {
        await user.save();
        const token = createJWT(user);
        res.json({ token });
      } catch (err) {
        console.log(err, " <- err signup controller function");
        res.status(400).json({err});
      }
    });
  }

async function login(req, res){
  try {
    const user = await User.findOne({email: req.body.email});

    if (!user) return res.status(401).json({err: 'bad credentials'});
    user.comparePassword(req.body.password, (err, isMatch) => {
      console.log(req.body, '------------------')
      if (isMatch) {
        const token = createJWT(user);
        
        res.json({token});
      } else {
        return res.status(401).json({err: 'bad credentials'});
      }
    });
  } catch (err) {
    return res.status(401).json(err);
  }
}

function createJWT(user){
    return jwt.sign(
        {user},
        SECRET,
        {expiresIn: '24h'}
    );
}