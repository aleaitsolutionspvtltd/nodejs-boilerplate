import jwt from 'jsonwebtoken';
import UserDataModel from '../models/usermodel.js';
import Helper from '../helpers/helper.js'


var checkUserAuth = async (req, res, next) => {
  let token;
  const { authorization } = req.headers;
  if (authorization && authorization.startsWith('Bearer')) {
    try {
      // Get Token from header
      token = authorization.split(' ')[1];

      // Verify Token
      const { userID } = jwt.verify(token, process.env.JWT_SECRET_KEY);
      // console.info({ userID });

      // Get User from Token
      let user = await UserDataModel.findById(userID).select('-password');
      if (!user) {
        res
          .status(401)
          .send({ status: 'failed', message: 'Unauthorized User' });
      }
      req.user = Helper.BsonToJsonConverter(user);
      next();
    } catch (error) {
      // console.log(error);
      res.status(401).send({ status: 'failed', message: 'Unauthorized User' });
    }
  }
  if (!token) {
    res
      .status(401)
      .send({ status: 'failed', message: 'Unauthorized User, No Token' });
  }
};

export default checkUserAuth;