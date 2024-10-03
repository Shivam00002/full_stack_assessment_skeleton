import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm";
import { Home } from "./Home";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column({ type: "varchar", length: 100 })
  username: string | undefined;

  @Column({ type: "varchar", length: 255 }) 
  email: string | undefined;

  @ManyToMany(() => Home, home => home.users)
  @JoinTable()
  homes: Home[] | undefined;
}
