var express = require('express'),
    router = express.Router();

/*
 * Profile
 */

router.get('/profile', function(req, res, next) {
    if(req.user.provider == 'facebook'){
        res.json({
            name: req.user.name.givenName + ' ' + req.user.name.familyName,
            image: req.user.photos[0].value
        })
    }else{
        res.json({
            name: req.user.displayName,
            image: req.user.photos[0].value
        })
    }
})

module.exports = router;