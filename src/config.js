module.exports = {
    name: 'Anymarket',
    CORS: ['http://localhost:5000', 'https://anymarket.com/'],
    apiPath: 'https://anymarket.com/api',
    api: {
        userLogin: `/api/login`,
        getUser: '/api/users/2'
    },
}
