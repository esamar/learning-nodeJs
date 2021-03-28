const {nanoid} = require('nanoid');
const auth = require('../auth');

const TABLA = 'user';

// podria ser el patron singleton
module.exports = function ( injectedStore , injectedCache )
{

    let cache = injectedCache;
    let store = injectedStore;

    if ( !store )
    {
        store = require('../../../store/mysql');
    }

    if ( !cache )
    {
        store = require('../../../store/mysql');
    }

    async function list()
    {
        let users = await cache.list(TABLA);
        if (!users)
        {
            console.log('No estaba en caché, Buscando en DB');
            users = await store.list(TABLA);
            cache.upsert(TABLA, users);

        }
        else{
            console.log('Nos traemos datos de cache');
        }
        return users;
        // return store.list(TABLA);
    }

    function get( id )
    {
        return store.get(TABLA, id);
    }

    async function upsert(body)
    {
        const user = {
            name: body.name,
            username: body.username,
        }

        if ( body.id)
        {
            user.id = body.id;
        }
        else
        {
            user.id = nanoid();
        }

        if ( body.password || body.username )
        {
            await auth.upsert({
                id: user.id,
                username: user.username,
                password: body.password,
            });

        }

        return store.upsert(TABLA, user);

    }

    async function follow (from, to)
    {

        return store.upsert( TABLA + '_follow' , {
            user_from: from,
            user_to: to,
        })
    }

    async function following (user)    
    {

        const join = {}
        join[TABLA] = 'user_to';
        const query = { user_from : user };

        return await store.query( TABLA + '_follow' , query , join);
    }




    return {
        list,
        get,
        upsert,
        follow,
        following,
    };
}