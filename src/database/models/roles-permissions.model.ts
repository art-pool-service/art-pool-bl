import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Role } from './role.model';
import { Permission } from './permission.model';

@Entity('rolespermissions')
export class RolesPermissions {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'int' })
  roleId!: number;

  @Column({ type: 'int' })
  permissionId!: number;

  @ManyToOne(() => Role)
  @JoinColumn({ name: 'roleId' })
  role!: Role;

  @ManyToOne(() => Permission)
  @JoinColumn({ name: 'permissionId' })
  permission!: Permission;
}
