// utils/types2.ts
import type { Link, User } from "../utils/sequelize";

type SortOrder = "asc" | "desc";

export interface AuthPayload {
  token: string;
  user: User;
}

export interface LinkOrderBy {
  description?: SortOrder;
  url?: SortOrder;
  createdAt?: SortOrder;
}

export interface Feed {
  id: string;
  links: Link[];
  count: number;
}
