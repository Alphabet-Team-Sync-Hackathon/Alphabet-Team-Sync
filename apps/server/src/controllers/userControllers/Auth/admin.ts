import { Request, Response } from 'express'
import { Op } from 'sequelize'
import { v4 as uuidV4 } from 'uuid'
import { registerSchema } from '../../../utils/validators'
import Admin from '../../../models/adminModel/adminUsers'
import {
  GenerateOTP,
  PasswordHarsher,
  passwordUtils,
} from '../../../utils/helpers'
import { HTTP_STATUS_CODE} from '../../../constants'


export const registerAdmin = async (req:Request, res:Response) => {
try {
    const passwordRegex = passwordUtils.regex
    const userValidate = registerSchema.strict().safeParse(req.body)

    if (userValidate.success) {
        const { firstName, lastName, email, phone, password } = userValidate.data
        const newEmail = email.trim().toLowerCase()

        if (!passwordRegex.test(password)) {
            return res.status(HTTP_STATUS_CODE.BAD_REQUEST).json({
              message: passwordUtils.error,
            })
        }

        const accountExist = await Admin.findOne({
            where: {
              [Op.or]: [{ email: newEmail }, { phone: phone }],
            },
        })

        if (!accountExist) {
            const hashedPassword = await PasswordHarsher.hash(password)
            const otpInfo = GenerateOTP()
            const otp = otpInfo.otp.toString()
            const id = uuidV4()
            const admin = await Admin.create({
                id,
                firstName,
                lastName,
                email: newEmail,
                phone,
                password: hashedPassword,
                otp,
                otp_expiry: otpInfo.expiry,
                company: '',
                jobTitle: '',
                role: 'admin',
                team: '',
                permissions: '',
                taskPreferences: '',
                performanceMetricsConfig: '',
                isVerified: false,
            })

            return res.status(HTTP_STATUS_CODE.SUCCESS).json({
                message: `Registration Successful`,
                user: {
                  firstName: admin.firstName,
                  lastName: admin.lastName,
                  email: admin.email,
                },
            })    
        } else{
            return res.status(HTTP_STATUS_CODE.CONFLICT).send({
                message: 'This account already exist',
            })
        }
    } else {
        return res.status(HTTP_STATUS_CODE.BAD_REQUEST).send({
            message: userValidate.error.issues,
        })
    }
    

} catch (error) {
    console.log(error)
    return res.status(HTTP_STATUS_CODE.INTERNAL_SERVER).json({
      message: [
        { message: `This is our fault, our team are working to resolve this.` },
      ],
    }) 
}
}
