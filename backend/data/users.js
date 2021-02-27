import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Carlos',
        email: 'carlos@gmail.com',
        password: bcrypt.hashSync('123456', 10)
    },
    {
        name: 'Sara',
        email: 'sara@gmail.com',
        password: bcrypt.hashSync('123456', 10)
    },
]

export default users