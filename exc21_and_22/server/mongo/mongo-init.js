db.createUser({
    user: 'the_username',
    pwd: 'the_password',
    roles: [
        {
            role: 'dbOwner',
            db: 'the_database',
        },
    ],
})

db.createCollection('jokes')

db.jokes.insert({ text: 'What’s the best thing about Switzerland? I don’t know, but the flag is a big plus.' })