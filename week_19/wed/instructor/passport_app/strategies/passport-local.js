var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/index').user;

function processSignupCallback(req, email, password, done) {
    User.findOne({
            where: {
                'email': email
            },
            attributes: ['id']
        })
        .then(function (user) {
            if (user) {
                return done(null, false);
            } else {

                User.create(req.body)
                    .then(function (user) {
                        user.password = undefined;
                        return done(null, user);
                    });
            }
        });
}

module.exports = function (passport) {
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.use('local-signup', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    }, processSignupCallback)); // <<-- more on this to come
};
