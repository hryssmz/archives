// utils/sequelize.ts
import { DataTypes, Model, Sequelize } from "sequelize";
import { NODE_ENV } from "./env";
import {
  CreationOptional,
  ForeignKey,
  HasManyCreateAssociationMixin,
  InferAttributes,
  InferCreationAttributes,
  NonAttribute,
} from "sequelize";

const sqliteDbPath = "./db.sqlite";
const sequelize = new Sequelize(`sqlite:${sqliteDbPath}`, {
  logging:
    NODE_ENV === "development" && process.env.JEST_WORKER_ID === undefined
      ? console.log
      : false,
});
const { DATE, INTEGER, STRING, UUID, UUIDV4 } = DataTypes;

export default sequelize;

export interface User
  extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  id: CreationOptional<string>;
  name: string;
  email: string;
  password: string;
  createdAt: CreationOptional<Date>;
  updatedAt: CreationOptional<Date>;

  links?: NonAttribute<Link[]>;
  votes?: NonAttribute<Vote[]>;

  createLink: HasManyCreateAssociationMixin<Link, "postedById">;
  createVote: HasManyCreateAssociationMixin<Vote, "userId">;
}

export const User = sequelize.define<User>("user", {
  id: { type: UUID, defaultValue: UUIDV4, primaryKey: true },
  name: { type: STRING, allowNull: false },
  email: { type: STRING, allowNull: false, unique: true },
  password: { type: STRING, allowNull: false },
  createdAt: { type: DATE, allowNull: false },
  updatedAt: { type: DATE, allowNull: false },
});

export interface Link
  extends Model<InferAttributes<Link>, InferCreationAttributes<Link>> {
  id: CreationOptional<string>;
  description: string;
  url: string;
  createdAt: CreationOptional<Date>;
  updatedAt: CreationOptional<Date>;

  postedById: ForeignKey<User["id"] | null>;
  postedBy?: NonAttribute<User | null>;
  votes?: NonAttribute<Vote[]>;
}

export const Link = sequelize.define<Link>("link", {
  id: { type: UUID, defaultValue: UUIDV4, primaryKey: true },
  description: { type: STRING, allowNull: false },
  url: { type: STRING, allowNull: false },
  createdAt: { type: DATE, allowNull: false },
  updatedAt: { type: DATE, allowNull: false },
  postedById: STRING,
});

export interface Vote
  extends Model<InferAttributes<Vote>, InferCreationAttributes<Vote>> {
  id: CreationOptional<number>;
  createdAt: CreationOptional<Date>;
  updatedAt: CreationOptional<Date>;

  linkId: ForeignKey<Link["id"]>;
  userId: ForeignKey<User["id"]>;
  link?: NonAttribute<Link>;
  user?: NonAttribute<User>;
}

export const Vote = sequelize.define<Vote>("vote", {
  id: { type: INTEGER, primaryKey: true, autoIncrement: true },
  createdAt: { type: DATE, allowNull: false },
  updatedAt: { type: DATE, allowNull: false },
  linkId: STRING,
  userId: STRING,
});

User.hasMany(Link, { foreignKey: { name: "postedById" } });
Link.belongsTo(User, { as: "postedBy" });

User.hasMany(Vote, { foreignKey: { allowNull: false } });
Vote.belongsTo(User);

Link.hasMany(Vote, { foreignKey: { allowNull: false } });
Vote.belongsTo(Link);
