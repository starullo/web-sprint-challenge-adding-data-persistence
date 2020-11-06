const db = require('../data/config');
const { where } = require('../data/config');

module.exports={
    async addResource(resource) {
        const [id] = await db('resources').insert(resource);
        return db('resources').where({id}).first();
    },
    getResources() {
        return db('resources')
    },
    async addProject(project) {
        const [id] = await db('projects').insert(project);
        return db('projects').where({id}).first();
    },
    getSpecificTasks(id) {
        // return db('tasks')
//         SELECT tasks.description as task, projects.project_name, projects.description from tasks
// join projects on projects.id = tasks.project_id
        return db('tasks')
        .join('projects', 'tasks.project_id', 'projects.id')
        .select('tasks.description as task description', 'projects.project_name as project_name', 'projects.description as project_description')
        .where({'tasks.project_id': id})
    },
    async addTask(task) {
        const [id] = await db('tasks').insert(task);
        return db('tasks').where({id}).first();
    },
    getAllTasks() {
        return db('tasks')
    }
}