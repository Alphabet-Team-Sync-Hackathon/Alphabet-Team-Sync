import { Request, Response } from 'express'
import { Op } from 'sequelize'
import { v4 as uuidV4 } from 'uuid'
import { registerSchema } from '../../../utils/validators'
import Admin from '../../../models/adminModel/adminUsers'
import {
  GenerateOTP,
  PasswordHarsher,
  passwordUtils,
  Jwt
} from '../../../utils/helpers'
import { HTTP_STATUS_CODE, JWT_ACCESS_TOKEN_EXPIRATION_TIME} from '../../../constants'


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

export const loginAdmin = async (req:Request, res:Response) => {
    try {
        const { password, email } = req.body;
        const admin = await Admin.findOne({
          where: { email: email },
        });
        if (admin) {                                                                                                                                                                                                                                  
          await PasswordHarsher.compare(password, admin.password);
        }
        if (admin) {
          const payload = {
            id: admin.id,
            role: admin.role
          };
          const accessToken = await Jwt.sign(payload, {
            expiresIn: JWT_ACCESS_TOKEN_EXPIRATION_TIME,
          });
    
          return res.status(HTTP_STATUS_CODE.SUCCESS).send({
            message: `Login Successful`,
            token: accessToken
          });
        }
        // else{
        return res.status(HTTP_STATUS_CODE.UNAUTHORIZED).send({
          message: `Invalid Credentials`,
        });
        
    } catch (error) {
        console.log(error);
        return res.status(HTTP_STATUS_CODE.INTERNAL_SERVER).send({
          message: `There is a problem`,
        });
    }
}



