import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Address } from './Address';

@Entity('persons')
export class Person {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 255 })
  firstName!: string;

  @Column({ type: 'varchar', length: 255 })
  middleName!: string;

  @Column({ type: 'varchar', length: 255 })
  lastName!: string;

  @Column({ type: 'int', nullable: true })
  addressId!: number;

  @ManyToOne(() => Address)
  @JoinColumn({ name: 'addressId' })
  address?: Address;
}
