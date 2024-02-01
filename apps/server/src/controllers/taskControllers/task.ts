import { Request, Response } from "express";
import { RequestExt } from "../../middlewares/authorization/authentication";
import Task from "../../models/taskModel/task";
import { v4 } from "uuid";
import { HTTP_STATUS_CODE } from "../../constants";
import Admin from "../../models/adminModel/adminUsers";

export const adminCreateTask = async (req: RequestExt, res: Response) => {
  try {
    const { _user: user, _userId: userId, ...rest } = req.body;
    // const adminId = v4();
    const confirmId = await Admin.findOne({ where: { id: userId } });

    if (confirmId) {
      const task = await Task.create({
        id: confirmId.id,
        title: "",
        description: "",
        startTime: new Date(),
        endTime: new Date(),
        status: "not_started",
        employeeId: "",
        priority: "low",
        comments: "",
        attachments: [],
        tags: [],
        reviewComments: "",
        reviewRating: 0,
      });
      return res.status(HTTP_STATUS_CODE.SUCCESS).send({
        message: `Task created successfully`,
        task,
      });
    }
    return res.status(HTTP_STATUS_CODE.UNAUTHORIZED).send({
      message: `User not found`,
    });
  } catch (error) {
    console.log(error);
    res.status(HTTP_STATUS_CODE.INTERNAL_SERVER).send({
      message: `There is a problem`,
    });
  }
};
