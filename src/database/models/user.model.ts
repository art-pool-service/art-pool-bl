import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne } from 'typeorm';
import { Person } from './person.model';
import { Role } from './role.model';


@Entity("users")
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar", length: 255 })
  phone!: string;

  @Column({ type: "varchar", length: 255 })
  hashedPassword!: string;

  @Column({ type: "int" })
  personId!: number;

  @Column({ type: "int" })
  roleId!: number;

  @OneToOne(() => Person, (person) => person.user, {
    cascade: true,
    eager: true,
    nullable: false,
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "personId" })
  person!: Person;

  @ManyToOne(() => Role)
  @JoinColumn({ name: "roleId" })
  role!: Role;
}
