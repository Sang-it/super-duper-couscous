import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Credential } from "./credential";

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field(() => String)
  @PrimaryGeneratedColumn("uuid")
  userID: string;

  @Field(() => String)
  @CreateDateColumn()
  createDate = Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedDate = Date;

  @Field()
  @Column()
  fullName: string;

  @Field()
  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  masterPIN: string;

  @Field()
  @Column({ default: false })
  isVerified: boolean;

  @Field(() => [Credential], { nullable: true })
  @OneToMany(() => Credential, (credential) => credential.user)
  credentials: Credential[];
}
