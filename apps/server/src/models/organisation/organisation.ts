
import { DataTypes,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
     Model } from 'sequelize';
import db from '../../config/dbconfig';


const TABLE_NAME='Orgaisation'

export const size = {
    small : "1-10",
    medium : "11-50",
    large : "50-100"
  }



class Organisation extends Model<
InferAttributes <Organisation>,
    InferCreationAttributes<Organisation>
> {
declare id: string;
declare name: string;
declare description: string;
declare contact: string;
declare industry: CreationOptional<Date>
declare size: CreationOptional<string>
declare logo: CreationOptional<string>
declare projects: string; 
declare departments: string;
declare admins: string[];
declare employees: string[];

}
Organisation.init(
  {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
      },
      name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contact: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    industry: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    size: {
        type: DataTypes.ENUM(...Object.values(size)),
        allowNull: false,
    },
    logo: {
        type: DataTypes.DATE,
      },
    projects: {
    type: DataTypes.DATE,
    allowNull: true,
    },
    departments:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    admins: {
      type: DataTypes.ARRAY,
      allowNull: false,
    },
    employees: {
      type: DataTypes.ARRAY,
      allowNull: true,
    }
  },
  {
    sequelize:db,
    modelName: 'Organisation',
    tableName: 'organisation',
    timestamps: true,
  }
);


 
// Organisation.hasMany(Admin, { sourceKey: 'id', foreignKey: 'organisationId', as: 'admins' });
// Organisation.hasMany(Employee, { sourceKey: 'id', foreignKey: 'organisationId', as: 'employees' });


export default Organisation;
