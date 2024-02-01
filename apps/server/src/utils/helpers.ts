import { ENV } from '../config'
import bcrypt from 'bcrypt'


export const passwordUtils = {
    length: 5,
    regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?.&])[A-Za-z\d@$!%*?.&]{5,}$/,
    error:`Password: Min 5 characters, with an uppercase, a lowercase, a number, and a special character.`
  }

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

 