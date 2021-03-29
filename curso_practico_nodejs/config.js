module.exports = {
    remoteDB:process.env.REMOTE_DB || false,
    api : {
        port : process.env.API_PORT || 3000
    },    
    post : {
        port : process.env.API_PORT || 3002
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'notasecreta!'
    },
    mysql: {
        host: process.env.MYSQL_HOST || '',
        user: process.env.MYSQL_USER || 'root',
        password: process.env.MYSQL_PASS || '',
        database: process.env.MYSQL_DB || 'bd_nodejs',
    },
    mysqlService: {
        host: process.env.MYSQL_SRV_HOST || 'localhost',
        port: process.env.MYSQL_SRV_PORT || '3001',

    },
    cacheService: {
        host: process.env.MYSQL_SRV_HOST || 'localhost',
        port: process.env.MYSQL_SRV_PORT || '3003',

    },
    redis:{
        host:process.env.REDIS_HOST || '',
        port:process.env.REDIS_PORT || '',
        password:process.env.REDIS_PASSWORD || '',
    }
}
