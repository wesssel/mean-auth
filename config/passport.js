var passport = require('passport');

var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
passport.use(new GoogleStrategy({
        clientID: '538629927214-1e8nfpukes0rmhlmpkq9luk35dfagpvj.apps.googleusercontent.com',
        clientSecret: 'AX90nc2scR8CvCHFiFlOCh0q',
        callbackURL: 'http://localhost:5000/auth/google/callback'
    },
    function(req, accessToken, refreshToken, profile, done) {
        done(null, profile);
    }
));

var TwitterStrategy = require('passport-twitter').Strategy;
passport.use(new TwitterStrategy({
        consumerKey: '1yMaOF5737sgwj9uDCzwIusrj',
        consumerSecret: 'SQFsyIeF7feQRSH9v0RIGqlMqvtwFZDysKak96zEqy60vt8tOb',
        callbackURL: 'http://localhost:5000/auth/twitter/callback',
        passReqToCallback: ''
    },
    function(req, accessToken, tokenSecret, profile, done) {
        done(null, profile);
    }
));

var FacebookStrategy = require('passport-facebook').Strategy;
passport.use(new FacebookStrategy({
        clientID: '798246546967528',
        clientSecret: 'f9a22fa53c5ebd0b96d5a9ab6af6afc3',
        callbackURL: 'http://localhost:5000/auth/facebook/callback',
        passReqToCallback: true,
        profileFields: ['name', 'picture']
    },
    function(req, accessToken, refreshToken, profile, done) {
        done(null, profile);
    }
));

passport.serializeUser(function(user, done) {
    done(null, user)
});

passport.deserializeUser(function(user, done) {
    done(null, user)
});