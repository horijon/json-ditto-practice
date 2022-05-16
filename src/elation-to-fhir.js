
const Ditto = require('json-ditto');

const jsonData = {
    "grids":[
        {
            "accession_number":"_el8_cc8ad97a-2fc7-4940-920b-48d7354874d2",
            "note":"",
            "resulted_date":"2021-06-10T03:58:00Z",
            "collected_date":"2021-06-10T03:58:00Z",
            "results":[
                {
                    "note":"",
                    "reference_max":"4",
                    "value_type":"Numeric",
                    "test":{
                        "code":"elation-psa-psa",
                        "name":"PSA",
                        "loinc":"2857-1"
                    },
                    "is_abnormal":true,
                    "text":"",
                    "units":"ng/mL",
                    "test_category":{
                        "description":"PSA",
                        "value":"elation-psa"
                    },
                    "abnormal_flag":"",
                    "value":"10",
                    "status":"FINAL",
                    "reference_min":""
                }
            ],
            "status":"FINAL"
        }
    ]
};

// Create a new mapper that will always use the "myCustomMappings" file
const myCustomMapper = new Ditto({
    category: {
        "output": [],
        "innerDocument": "grids",
        "mappings": {
            coding: {
                "output": [],
                "innerDocument": "results",
                "mappings": {
                    "display": "test_category.description",
                    "value": "test_category.value"
                }
            }
        }
    }
});

// Call the unify function that will read the "documentToBeUnified" and transforms it via the mapping file
myCustomMapper.unify(jsonData).then((result) => {
    console.log(JSON.stringify(result, null, 2));
});
