const express = require('express')
const path = require('path')

const {open} = require('sqlite')
const sqlite3 = require('sqlite3')
const app = express()

const dbpath = path.join(__dirname, 'cricketTeam.db')

let db = null

const initializedserver = async () => {
  try {
    db = await open({
      fileName: dbpath,
      driver: sqlite3.Database,
    })
  } catch (e) {
    console.log(`DB Error : ${e.message}`)
    process.exit(1)
  }
}

initializedserver()
