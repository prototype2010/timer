export function generateNextId(tasksArray) {

    return tasksArray.length === 0 ?
        1
        : Math.max.apply(null, tasksArray.map(({id}) => id)) + 1
}