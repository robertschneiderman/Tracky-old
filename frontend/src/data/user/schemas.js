import { normalize, schema } from 'normalizr';

export const goalSchema = new schema.Entity('goals', {});
export const timestampSchema = new schema.Entity('timestamps', {});
export const taskSchema = new schema.Entity('tasks', {goals: [goalSchema], timestamps: [timestampSchema]});
export const userSchema = new schema.Entity('users', {tasks: [taskSchema]});
