import bcrypt from 'bcrypt'
import jwt, { JwtPayload } from 'jsonwebtoken'
import ENV from '../config/env'





export class PasswordHarsher {
    static async compare(password: string, hash: string) {
      return await bcrypt.compare(password, hash)
    }
  
    static async hash(password: string) {
      const salt = await bcrypt.genSalt(10)
      return await bcrypt.hash(password, salt)
    }
  }


  export const GenerateOTP = (options?: { expires: number }) => {
    const otp = Math.floor(100000 + Math.random() * 900000)
    const expiry = new Date()
    expiry.setTime(
      new Date().getTime() + Number(options?.expires) || 30 * 60 * 1000
    )
    return { otp, expiry }
  }

  export class Jwt {
    static async sign<
      TokenPayload extends Record<
        string,
        string | Record<string, unknown> | Array<unknown>
      >,
    >(payload: TokenPayload, options?: jwt.SignOptions & { _secret?: string }) {
      const { _secret, ...restOptions } = options ?? {}
      return jwt.sign(payload, _secret ?? ENV.JWT_SECRET!, restOptions)
    }
  
    static async verify<T extends JwtPayload>(
      token: string,
      options?: jwt.VerifyOptions & { complete?: true; _secret?: string }
    ): Promise<T> {
      const { _secret, ...restOptions } = options ?? {}
      return jwt.verify(token, _secret ?? ENV.JWT_SECRET!, restOptions) as T
    }
  
    static async isTokenExpired<T extends JwtPayload>(
      token: string,
      secret?: string
    ) {
      try {
        const payload = await this.verify(token, {
          _secret: secret || ENV.JWT_SECRET,
        })
        return { data: payload as T, expired: false, valid: true }
      } catch (e) {
        if (e instanceof jwt.TokenExpiredError) {
          return {
            data: (await jwt.decode(token)) as T,
            expired: true,
            valid: true,
          }
        } else {
          const decoded = (await jwt.decode(token)) as JwtPayload
          return {
            data: (decoded || {}) as T,
            expired:
              (decoded?.exp && decoded?.exp < Math.floor(Date.now() / 1000)) ||
              true,
            valid: false,
            error: e,
          }
        }
      }
    }
  }