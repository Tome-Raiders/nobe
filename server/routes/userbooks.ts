const express = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const UserBooks = express.Router();



module.exports = UserBooks;