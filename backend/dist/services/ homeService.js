"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateHomeUsers = exports.findHomesByUser = void 0;
const database_1 = require("../config/database");
const Home_1 = require("../entities/Home");
const _User_1 = require("../entities/ User");
const homeRepository = database_1.AppDataSource.getRepository(Home_1.Home);
const findHomesByUser = (username) => __awaiter(void 0, void 0, void 0, function* () {
    return yield homeRepository
        .createQueryBuilder("home")
        .innerJoinAndSelect("home.users", "user")
        .where("user.username = :username", { username })
        .getMany();
});
exports.findHomesByUser = findHomesByUser;
const updateHomeUsers = (streetAddress, usernames) => __awaiter(void 0, void 0, void 0, function* () {
    const home = yield homeRepository.findOne({
        where: { street_address: streetAddress },
        relations: ["users"]
    });
    if (!home) {
        throw new Error("Home not found");
    }
    const userRepository = database_1.AppDataSource.getRepository(_User_1.User);
    const users = yield userRepository.findByIds(usernames);
    home.users = users;
    return yield homeRepository.save(home);
});
exports.updateHomeUsers = updateHomeUsers;
