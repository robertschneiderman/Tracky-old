import { normalize, schema } from 'normalizr';

export const goalSchema = new schema.Entity('goals', {});
export const timestampSchema = new schema.Entity('timestamps', {});
export const taskSchema = new schema.Entity('tasks', {goals: [goalSchema]});
export const historySchema = new schema.Entity('historys', {tasks: [taskSchema]});
export const userSchema = new schema.Entity('users', {historys: [historySchema]});
