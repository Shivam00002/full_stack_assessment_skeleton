import { AppDataSource } from "../config/database";
import { User } from "../entities/ User";

const userRepository = AppDataSource.getRepository(User);

export const findAllUsers = async (): Promise<User[]> => {
  return await userRepository.find();
};

export const findUsersByHome = async (streetAddress: string): Promise<User[]> => {
  return await userRepository
    .createQueryBuilder("user")
    .innerJoinAndSelect("user.homes", "home")
    .where("home.street_address = :streetAddress", { streetAddress })
    .getMany();
};