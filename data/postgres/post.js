const Sequelize = require('sequelize');
const database = 'bliki',
    host ='localhostSOMETHING', 
    usernam='admin', 
    password ='password';
const sequelize = new Sequelize(database,username,password, {
    host: host,
    dialect: 'postgres'
});

const User = sequelize.define('post', {
    title:{ type: Sequelize.STRING, primaryKey:true},
    content: {type: Sequelize.STRING},
    author:{type:  Sequelize.STRING},
    tags:{type: Sequelize.STRING},
    timeStamp:{type: Sequelize.DATE} //bigint?
});

sequelize.sync().then(() => {
    console.log('Postgre connection ready');
});

module.exports = USER;