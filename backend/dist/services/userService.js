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
exports.findUsersByHome = exports.findAllUsers = void 0;
const database_1 = require("../config/database");
const _User_1 = require("../entities/ User");
const userRepository = database_1.AppDataSource.getRepository(_User_1.User);
const findAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield userRepository.find();
});
exports.findAllUsers = findAllUsers;
const findUsersByHome = (streetAddress) => __awaiter(void 0, void 0, void 0, function* () {
    return yield userRepository
        .createQueryBuilder("user")
        .innerJoinAndSelect("user.homes", "home")
        .where("home.street_address = :streetAddress", { streetAddress })
        .getMany();
});
exports.findUsersByHome = findUsersByHome;
