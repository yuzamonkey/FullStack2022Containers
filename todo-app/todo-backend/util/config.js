const MONGO_URL = process.env.MONGO_URL || undefined
const REDIS_URL = process.env.REDIS_URL || undefined

console.log("\n•••\nMONGO_URL", MONGO_URL)
console.log("REDIS_URL", REDIS_URL)
console.log("PORT", process.env.PORT, "\n•••\n")

module.exports = {
  MONGO_URL,//: 'mongodb://the_username:the_password@localhost:3456/the_database',
  REDIS_URL//: '//localhost:6378'
}