
const Ditto = require('json-ditto');

const jsonData = {
    "category": [
        {
            "coding": [
                {
                    "display": "PSA",
                    "value": "elation-psa"
                }
            ]
        }
    ]
};

// Create a new mapper that will always use the "myCustomMappings" file
const myCustomMapper = new Ditto({
    grids: {
        "output": [],
        "innerDocument": "category",
        "mappings": {
            results: {
                "output": [],
                "innerDocument": "coding",
                "mappings": {
                    "test_category.description": "display",
                    "test_category.value": "value"
                }
            }
        }
    }
});

// Call the unify function that will read the "documentToBeUnified" and transforms it via the mapping file
myCustomMapper.unify(jsonData).then((result) => {
    console.log(JSON.stringify(result, null, 2));
});
