const Sequelize = require('sequelize');
const database = 'bliki',
    host ='localhost', 
    username='postgres', 
    password ='admin';
const sequelize = new Sequelize(database,username,password, {
    host: host,
    dialect: 'postgres'
});

const Post = sequelize.define('posts', {
    title:{ type: Sequelize.STRING, primaryKey:true},
    content: {type: Sequelize.TEXT},
    author:{type:  Sequelize.STRING},
    tags:{type: Sequelize.STRING}
    // ,updatedAt:false
});

sequelize.sync();

module.exports = Post;