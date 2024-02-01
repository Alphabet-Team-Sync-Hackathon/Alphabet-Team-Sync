import { 
    DataTypes, 
    Model,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional
} from "sequelize";

import db from "../../config/dbconfig";

const TABLE_NAME = 'Admin'

const defaultRole = 'admin'

class Admin extends Model<
InferAttributes<Admin>,
InferCreationAttributes<Admin>
> {
  declare id: string
  declare firstName: string
  declare lastName: string
  declare email: string;
  declare phone: string;
  declare role: string;
  declare otp: CreationOptional<string>
  declare otp_expiry: CreationOptional<Date>
  declare resetToken: CreationOptional<string>
  declare resetTokenExpires: CreationOptional<Date>
  declare password: string;
  declare company: string;
  declare jobTitle: string;
  declare team: string;
  declare communicationChannels:CreationOptional<string>;
  declare permissions: string; 
  declare taskPreferences: string;
  declare performanceMetricsConfig: string;
  declare isVerified: boolean;
}

Admin.init(
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
    phone:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role:{
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: defaultRole
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
    isVerified: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize: db,
    tableName: TABLE_NAME,
    modelName: TABLE_NAME,
    timestamps: true,
  }
);

export default Admin;
