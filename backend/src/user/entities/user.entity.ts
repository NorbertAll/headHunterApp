import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {Exclude} from "class-transformer";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column({unique:true})
    email: string;

    @Exclude()
    @Column()
    password: string;

    @Column({default: "admin"})
    roles: string;
}

 export enum UserRoles {
    ADMIN= 'admin',
    HR = 'hr',
    STUDENT = 'student,'
}