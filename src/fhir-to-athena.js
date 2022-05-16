const Ditto = require('json-ditto');

const jsonData = {
    "category": [
        {
            "coding": [
                {
                    "display": "PSA",
                    "value": "elation-psa"
                },
                {
                    "display": "PSA2",
                    "value": "elation-psa2"
                }
            ]
        }
    ]
};

// Create a new mapper that will always use the "myCustomMappings" file
const myCustomMapper = new Ditto({
    analytes: {
        "output": [],
        "innerDocument": "category[0].coding",
        "mappings": {
            "display": "description",
            "value": "value"
        }
    }
});

// Call the unify function that will read the "documentToBeUnified" and transforms it via the mapping file
myCustomMapper.unify(jsonData).then((result) => {
    console.log(JSON.stringify(result, null, 2));
});
