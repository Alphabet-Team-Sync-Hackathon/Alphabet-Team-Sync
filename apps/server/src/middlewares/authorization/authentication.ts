import { NextFunction, Response, Request } from 'express'
import {
  HTTP_STATUS_CODE,
  JWT_EXPIRATION_STATUS_CODE,
  JWT_INVALID_STATUS_CODE,
} from '../../constants'
import Admin from '../../models/adminModel/adminUsers'
import {  Jwt } from '../../utils/helpers'

interface ReqBody extends Record<string, unknown> {
  _user: Admin
  _userId: string
}

export interface RequestExt extends Request {
  body: ReqBody
}

export const authorizationMiddleware = async (
  req: RequestExt,
  res: Response,
  next: NextFunction
) => {
  const authorization = req?.headers?.authorization

  if (!authorization) {
    return res.status(HTTP_STATUS_CODE.UNAUTHORIZED).json({
      message: ['Unauthorized access:', 'Token is missing'],
      code: JWT_INVALID_STATUS_CODE,
    })
  }

  const token = authorization.split(' ')[1] as string

  const { data, expired, valid } = await Jwt.isTokenExpired<Admin>(token)

  if (!expired && valid) {
    /**
     * TODO: use redis to cache logged users (reduce data base query for performance)
     * if we may need more data than **id** that the jwt token provides
     * we would need to call db and cache the result in redis,
     * the next call will read from redis instead.
     *
     * check our cache for this user
     * if user is fresh, query db the add to cache
     * set user object to req.user
     *
     * for now, we always call the db
     */

    req.body['_userId'] = data.id

    req.body['_user'] = (await Admin.findOne({
      where: { id: data.id },
    })) as Admin
    return next()
  }
  return res.status(HTTP_STATUS_CODE.UNAUTHORIZED).json({
    message: 'Unauthorized access',
    code: valid ? JWT_EXPIRATION_STATUS_CODE : JWT_INVALID_STATUS_CODE,
  })
}

