const bcrypt = require('bcrypt');

const password = '123Segura!';

bcrypt.hash(password, 5, (err, hash)=>{
    console.log(hash);
    bcrypt.compare(password, hash, (err, resp)=>{
        console.log(resp);
    });
})