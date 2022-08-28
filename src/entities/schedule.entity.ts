import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { User } from "./user.entity";
import { Property } from "./property.entity";

@Entity("schedules_users_properties")
class Schedules {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("date")
  date: string;

  @Column("time")
  hour: string;

  @ManyToOne(() => User, (user) => user.schedules, { eager: true })
  user: User;

  @ManyToOne(() => Property, (property) => property.schedules)
  property: Property;
}

export { Schedules };
