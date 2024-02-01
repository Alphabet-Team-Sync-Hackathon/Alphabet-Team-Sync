
import { DataTypes,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
     Model } from 'sequelize';

import db from '../../config/dbconfig';

const TABLE_NAME='Employee'

enum UserRole {
    Employee = "employee",
    // Add other roles as needed
  }



class Employee extends Model<
InferAttributes <Employee>,
    InferCreationAttributes<Employee>
> {
declare id: string;
declare firstName: string;
declare lastName: string;
declare email: string;
declare otp: CreationOptional<string>
declare otp_expiry: CreationOptional<Date>
declare resetToken: CreationOptional<string>
declare resetTokenExpires: CreationOptional<Date>
declare password: string; 
declare role: string; 
declare company: string;
declare jobTitle: string;
declare department: string;
declare team: string;
declare communicationChannels: string;
declare permissions: string;
declare taskPreferences: string;
declare performanceMetricsConfig: string;
declare startDate: Date;
declare endDate: Date;
}
Employee.init(
  {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
      },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    otp: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      otp_expiry: {
        type: DataTypes.DATE,
      },
      resetToken: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      resetTokenExpires: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    department:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'employee',
    },
    company: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    jobTitle: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    team: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    communicationChannels: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    permissions: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    taskPreferences: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    performanceMetricsConfig: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // Employee-specific fields
    startDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize:db,
    modelName: 'Employee',
    tableName: 'employees',
    timestamps: true,
  }
);

export default Employee;
