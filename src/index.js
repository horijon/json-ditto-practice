const Ditto = require('json-ditto');

const mapping = {
    "firstName": "firstName",
    "lastName": "lastName",
    "address": {
        "zip": "zipcode",
        "state": "state"
    },
    "telecom": {
        "output": [],
        "innerDocument": "telecom",
        "presequisite": "!!innerResult.code",
        "mappings": {
            "code": "code",
            "type": "type"
        }
    }
};

const jsonData = {
    "firstName": "kshitij",
    "lastName": "khanal",
    "zipcode": 1234,
    "state": "NY",
    "telecom": [
        {
            "code": "123",
            "type": "mobile"
        },
        {
            "code": "kshitij@gmail.com",
            "type": "email"
        }
    ]
};

new Ditto(mapping).unify(jsonData).then((result) => {
    console.log(result);
});
