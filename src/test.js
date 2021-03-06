const Ditto = require('json-ditto');

const jsonData = {
    "category": [
        {
            "coding": [
                {
                    "display": "SARS-CoV-2 (COVID-19) IgM Ab [Units/volume] in Serum or Plasma by Immunoassay"
                }
            ]
        }
    ]
};

const target = {
    "description": "SARS-CoV-2 (COVID-19) IgM Ab [Units/volume] in Serum or Plasma by Immunoassay"
};

// Create a new mapper that will always use the "myCustomMappings" file
const myCustomMapper = new Ditto({
        "display": "category[0].coding[0].display"
});

// Call the unify function that will read the "documentToBeUnified" and transforms it via the mapping file
myCustomMapper.unify(jsonData).then((result) => {
    console.log(JSON.stringify(result, null, 2));
});
