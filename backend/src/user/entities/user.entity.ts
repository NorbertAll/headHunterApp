import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('users')
export class UserEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column({unique:true})
    email: string;

    @Column()
    password: string;

    @Column({default: "admin"})
    roles: string;
}
