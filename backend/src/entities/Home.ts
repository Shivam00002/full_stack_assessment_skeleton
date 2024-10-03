import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import { User } from "./ User";

@Entity()
export class Home {
  @PrimaryGeneratedColumn() 
  id: number | undefined;

  @Column({ type: "varchar", length: 255 }) 
  street_address: string | undefined;

  @Column({ type: "varchar", length: 100 })
  state: string | undefined;

  @Column({ type: "varchar", length: 20 })
  zip: string | undefined;

  @Column("float")
  sqft: number | undefined;

  @Column("int")
  beds: number | undefined;

  @Column("int")
  baths: number | undefined;

  @Column("float")
  list_price: number | undefined;

  @ManyToMany(() => User, user => user.homes)
  users: User[] | undefined;
}
