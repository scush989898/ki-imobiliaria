import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";

import { Exclude } from "class-transformer";
import { Schedules } from "./schedule.entity";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 90 })
  name: string;

  @Column({ unique: true, length: 70 })
  email: string;

  @Column({ length: 160 })
  @Exclude()
  password: string;

  @Column()
  isAdm: boolean;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Schedules, (schedules) => schedules.user)
  schedules: Schedules[];
}

export { User };
