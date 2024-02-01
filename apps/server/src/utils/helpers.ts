import bcrypt from 'bcrypt'




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