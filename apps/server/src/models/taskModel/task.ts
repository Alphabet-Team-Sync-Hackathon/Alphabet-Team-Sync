// models/Task.ts

import { DataTypes,
     InferAttributes,
      InferCreationAttributes,
      CreationOptional,
       Model } from 'sequelize';
import db from  "../../config/dbconfig";
const TABLE_NAME= "Tasks"

class Task extends Model<InferAttributes<Task>,
InferCreationAttributes<Task>
> {
  declare id: string;
  declare title: string;
  declare description: string;
  declare startTime: Date;
  declare endTime: Date;
  declare status: 'not_started' | 'started' | 'in_progress' | 'completed' | 'in_review'; // Task status
  declare employeeId: string; // Foreign key to associate with an employee
  declare priority: 'low' | 'medium' | 'high'; // Priority level of the task
  declare comments: string; // Comments or notes related to the task
  declare attachments: string[]; // File attachments associated with the task
  declare tags: string[]; // Tags for categorizing tasks
  declare reviewComments: string; // Comments provided during the review phase
  declare reviewRating: number; // Rating given during the review phase

}

Task.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull:false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    startTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'not_started',
    },
    employeeId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    priority: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    comments: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    attachments: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
    tags: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
    reviewComments: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    reviewRating: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
  },
  {
    sequelize:db,
    modelName: 'Tasks',
    tableName: 'Tasks',
    timestamps: true,
  }
);

export default Task;
