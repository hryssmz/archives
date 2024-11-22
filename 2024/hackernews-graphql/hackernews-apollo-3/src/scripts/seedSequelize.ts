// scripts/seedSequelize.ts
import bcrypt from "bcryptjs";
import sequelize, { Link, User } from "../utils/sequelize";

sequelize
  .sync({ force: true })
  .then(async () => {
    const john = await User.create({
      name: "John Doe",
      email: "john-doe@example.com",
      password: await bcrypt.hash("secret", 10),
    });
    const link1 = await john.createLink({
      description: "John Doe's blog",
      url: "https://blog.john-doe.com",
    });
    await john.createLink({
      description: "John Doe's homepage",
      url: "https://john-doe.com",
    });

    const link = await Link.findByPk(link1.id, {
      include: { model: User, as: "postedBy", include: [{ model: Link }] },
    });
    const links = link?.postedBy?.links;
    console.log(links);
  })
  .catch(error => {
    console.error(error);
  });
