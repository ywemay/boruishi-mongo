// db.use('boruishi')

db.createUser({
  user: 'someusername',
  pwd: 'someuserpass',
  roles: [
    { role: 'readWrite', db: 'boruishi' }
  ]
})
