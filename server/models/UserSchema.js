"use strict";
const mongoose = require("mongoose"),
  Schema = mongoose.Schema,
  bcrypt = require("bcrypt"),
  SALT_WORK_FACTOR = 10;

const UserSchema = new Schema({
  UserName: {
    type: String,
    required: true,
    index: {
      unique: true
    }
  },
  Role: {
    type: String,
    required: true
  },
  Password: {
    type: String,
    required: true
  }
});
UserSchema.pre("save", function(next) {
  var user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified("Password")) return next();

  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if (err) return next(err);

    // hash the password using our new salt
    bcrypt.hash(user.Password, salt, function(err, hash) {
      if (err) return next(err);

      // override the cleartext password with the hashed one
      user.Password = hash;
      next();
    });
  });
});

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.Password, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

UserSchema.methods.changePassword = function(oldPassword, newPassword, cb) {
  if (!oldPassword || !newPassword) {
    return cb(
      new errors.MissingPasswordError(
        options.errorMessages.MissingPasswordError
      )
    );
  }

  var self = this;

  this.authenticate(oldPassword, function(err, authenticated) {
    if (err) {
      return cb(err);
    }

    if (!authenticated) {
      return cb(
        new errors.IncorrectPasswordError(
          options.errorMessages.IncorrectPasswordError
        )
      );
    }

    self.setPassword(newPassword, function(setPasswordErr, user) {
      if (setPasswordErr) {
        return cb(setPasswordErr);
      }

      self.save(function(saveErr) {
        if (saveErr) {
          return cb(saveErr);
        }

        cb(null, user);
      });
    });
  });
};

module.exports = mongoose.model("user", UserSchema);
