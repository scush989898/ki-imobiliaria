import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  JoinColumn,
} from "typeorm";

import { Category } from "./category.entity";
import { Address } from "./adress.entity";
import { Schedules } from "./schedule.entity";

@Entity("properties")
class Property {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ default: false })
  sold: boolean;

  @Column("decimal", { precision: 12, scale: 2 })
  value: number;

  @Column("integer")
  size: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => Address, { eager: true })
  @JoinColumn()
  address: Address;

  @ManyToOne(() => Category)
  category: Category;

  @OneToMany(() => Schedules, (schedules) => schedules.property)
  schedules: Schedules[];
}

export { Property };
