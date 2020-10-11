const get = require('./get').get;

const index = async () => {
    try {
        const result = await get('https://api.github.com/users/janmarkuslanger');
    } catch (error) {
        console.log(error)
    }
};

index();

