// File: userModel.js
const mongoose = require('mongoose');
const express = require('express');
const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});
const UserModel = mongoose.model("users", UserSchema); // Declared once

module.exports = UserModel;
