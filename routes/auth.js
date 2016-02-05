var express = require('express'),
    router = express.Router(),
    passport = require('passport');

/*
 * Google
 */

router.route('/google/callback')
.get(passport.authenticate('google', {
    successRedirect: '/#/profile',
    failure: '/error'
}))

router.route('/google')
.get(passport.authenticate('google', {
    scope: ['https://www.googleapis.com/auth/userinfo.profile', 'https://www.googleapis.com/auth/userinfo.email']
}))

/*
 * Twitter
 */

router.route('/twitter/callback')
.get(passport.authenticate('twitter', {
    successRedirect: '/#/profile',
    failure: '/error'
}))

router.route('/twitter')
.get(passport.authenticate('twitter'))

/*
 * Facebook
 */

router.route('/facebook/callback')
.get(passport.authenticate('facebook', {
    successRedirect: '/#/profile',
    failure: '/error'
}))

router.route('/facebook')
.get(passport.authenticate('facebook'))

module.exports = router;