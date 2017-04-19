export const sortTasks = tasks => {
    return tasks.sort((a, b) => a.taskOrder - b.taskOrder);
};