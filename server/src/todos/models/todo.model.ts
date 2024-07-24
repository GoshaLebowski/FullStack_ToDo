import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'todos' })
export class Todo extends Model<Todo> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    title: string;

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false,
    })
    done: boolean;
}
