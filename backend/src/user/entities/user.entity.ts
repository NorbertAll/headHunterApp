import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {Exclude} from "class-transformer";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({default: null})
    token: string;

    @Column({unique:true})
    email: string;

    @Exclude()
    @Column({default: null})
    password: string;

    @Column({default: "admin"})
    roles: string;

    @Column({default: false})
    is_active: boolean
}

 export enum UserRoles {
    ADMIN= 'admin',
    HR = 'hr',
    STUDENT = 'student,'
}