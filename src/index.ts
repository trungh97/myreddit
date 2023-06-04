import { MikroORM, RequestContext, RequiredEntityData } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import mikroOrmConfig from "./mikro-orm.config";

const main = async () => {
  const orm = await MikroORM.init(mikroOrmConfig);

  await RequestContext.createAsync(orm.em, async () => {
    // inside this handler the `orm.em` will actually use the contextual fork, created via `RequestContext.createAsync()`
    await orm.getMigrator().up();
    // const post = orm.em.create(Post, {
    //   title: "my first post",
    // } as RequiredEntityData<Post>);
    // await orm.em.persistAndFlush(post);

    const posts = await orm.em.find(Post, { })
    console.log(posts)
  });
};

main().catch((err) => {
  console.error(err);
});
