import { DB_PORT, MONGO_DBNAME, MONGO_HOST } from "@config";

export const dbConnection = {
  url: `mongodb://${MONGO_HOST}:${DB_PORT}/${MONGO_DBNAME}`,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
};
