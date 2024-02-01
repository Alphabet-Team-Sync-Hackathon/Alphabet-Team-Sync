import { Request, Response } from "express";
import Employee from "../../../models/employeeModels/employeeUsers";
import { PasswordHarsher, GenerateOTP } from "../../../utils/helpers";
import { v4 as uuidV4 } from "uuid";
import { HTTP_STATUS_CODE } from "../../../constants/httpStatusCode";

export const registerEmployee = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, password, email } = req.body;

    const employeeExists = await Employee.findOne({ where: { email: email } });

    if (!employeeExists) {
      const hashPassword = await PasswordHarsher.hash(password);
      const otpInfo = GenerateOTP();
      const otp = otpInfo.otp.toString();
      const id = uuidV4();

      const employee = await Employee.create({
        id,
        firstName,
        lastName,
        email: email,
        otp,
        otp_expiry: otpInfo.expiry,
        password: hashPassword,
        role: "employee",
        company: "",
        jobTitle: "",
        department: "",
        team: "",
        communicationChannels: "",
        permissions: "",
        taskPreferences: "",
        performanceMetricsConfig: "",
        startDate: new Date(),
        endDate: new Date(),
      });

      return res.status(200).json({
        message: `Registration successful`,
        employee: {
          firstName: employee.firstName,
          lastName: employee.lastName,
          email: employee.email,
        },
      });
    } else {
      return res.status(409).json({
        message: `User already exists`,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(HTTP_STATUS_CODE.INTERNAL_SERVER).send({
      message: `There is a problem`,
    });
  }
};
