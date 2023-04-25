import bcrypt from 'bcryptjs'

const data = {
    users:[
        {
            name: 'Nikolay',
            email: 'admin@example.cpm',
            password: bcrypt.hashSync('123456')
        },
        {
            name: 'John',
            email: 'user@example.cpm',
            password: bcrypt.hashSync('123456')
        }
    ]
}