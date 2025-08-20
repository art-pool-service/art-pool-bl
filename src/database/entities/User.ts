import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Person } from './Person';
import { Role } from './Role';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 255 })
  phone!: string;

  @Column({ type: 'varchar', length: 255 })
  hashedPassword!: string;

  @Column({ type: 'int' })
  personId!: number;

  @Column({ type: 'int' })
  roleId!: number;

  @ManyToOne(() => Person)
  @JoinColumn({ name: 'personId' })
  person!: Person;

  @ManyToOne(() => Role)
  @JoinColumn({ name: 'roleId' })
  role!: Role;
}
