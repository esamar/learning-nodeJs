const jwt = require('jsonwebtoken');
const config = require('../config');
const error = require('../utils/error');

const secret = config.jwt.secret;

function sign(data)
{ 
    return jwt.sign(data, secret);
}

const check = {
    own: function(req, owner)
    {
        const decoded = decodeHeader(req);
        // console.log(decoded.data);
        // COMPROBAR SI ES O NO PROPIO
        // console.log(decoded.data.id, owner);
        if (decoded.data.id !== owner)
        {
            throw error('No puedes hacer esto', 401);
            // throw new Error ('No puedes hacer esto');
        }
    },
    logged: function (req, owner){
        const decoded = decodeHeader(req);

    },
}

function verify ( token )
{

    return jwt.verify( token, secret );

}

function getToken ( auth )
{
    // bearer 
    if ( !auth)
    {
        // throw new Error ('No viene token');
        throw error('No viene token', 401);
    }
    if ( auth.indexOf('Bearer') === -1 )
    {
        // throw new Error ('Formato Invalido');
        throw error('Formato bearer invalido', 401);
        
    }

    let token = auth.replace('Bearer ' , '');
    
    return token;

}

function decodeHeader(req)
{
    const authorization = req.headers.authorization || '';
    const token = getToken( authorization );
    const decoded = verify(token);

    req.user = decoded;

    return decoded;
}
module.exports = {
    sign,
    check,
}