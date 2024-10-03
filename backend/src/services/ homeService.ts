import { AppDataSource } from "../config/database";
import { Home } from "../entities/Home";
import { User } from "../entities/ User";

const homeRepository = AppDataSource.getRepository(Home);

export const findHomesByUser = async (username: string): Promise<Home[]> => {
  return await homeRepository
    .createQueryBuilder("home")
    .innerJoinAndSelect("home.users", "user")
    .where("user.username = :username", { username })
    .getMany();
};

export const updateHomeUsers = async (streetAddress: string, usernames: string[]): Promise<Home> => {
  const home = await homeRepository.findOne({ 
    where: { street_address: streetAddress },
    relations: ["users"]
  });

  if (!home) {
    throw new Error("Home not found");
  }

  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.findByIds(usernames);

  home.users = users;
  return await homeRepository.save(home);
};