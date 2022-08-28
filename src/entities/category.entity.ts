import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";

import { Property } from "./property.entity";

@Entity("categories")
class Category {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 120, unique: true })
  name: string;

  @OneToMany(() => Property, (Property) => Property.category)
  properties: Property[];
}

export { Category };
