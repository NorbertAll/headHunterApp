import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {Exclude} from "class-transformer";

@Entity('auth')
export class Auth {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique:true})
    email: string;

    @Exclude()
    @Column()
    password: string;

    @Column()
    roles: string;

    @Column()
    token: string;
}