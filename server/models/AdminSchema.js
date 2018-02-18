'use strict'
const mongoose = require('mongoose'),
Schema = mongoose.Schema,
bcrypt = require('bcrypt'),
SALT_WORK_FACTOR = 10;

const AdminSchema = new Schema({
    Name: {
        type: String,
        required: true
    },
    UserName: {
        type: String,
        required: true,
        index: {
            unique: true
        }
    },
    Password: {
        type: String,
        required: true
    }
})  
AdminSchema.pre('save', function(next) {
    var admin = this;

    // only hash the password if it has been modified (or is new)
    if (!admin.isModified('Password')) return next();

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(admin.Password, salt, function(err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            admin.Password = hash;
            next();
        });
    });
});

AdminSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

module.exports  = mongoose.model('admin', AdminSchema)