import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import path from 'path';
import { Options } from "@mikro-orm/core";

export default {
  migrations: {
    path: path.join(__dirname, './migrations'),
    snapshot: false
  },
  password: "201097",
  entities: [Post],
  dbName: "myreddit",
  type: "postgresql",
  debug: !__prod__,
} as Options;
