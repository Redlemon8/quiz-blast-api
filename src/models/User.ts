// models/user.model.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from '../models/connection';

class User extends Model {
  public user!: string;
  public email!: string;
  public password!: string;
  public avatar!: string | null;
  public score!: number | null;
}

User.init(
  {
    user: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    avatar: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'utilisateur',
    timestamps: false,
  }
);

export default User;