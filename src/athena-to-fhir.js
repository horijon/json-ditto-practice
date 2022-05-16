
const Ditto = require('json-ditto');

const jsonData = {
    "analytes": [
        {
            "note": "incididunt nisi",
            "analytedate": "11/23/2021",
            "description": "SARS-CoV-2 (COVID-19) IgM Ab [Units/volume] in Serum or Plasma by Immunoassay",
            "units": "culpa duis",
            "referencerange": "80-120",
            "resultstatus": "final",
            "analytename": "sed reprehenderit",
            "abnormalflag": "susceptible",
            "analyteid": 7871,
            "analytedatetime": "11/23/2021 00:00:00",
            "value": "110",
            "loinc": "94506-3",
            "status": "susceptible"
        },
        {
            "note": "sed consectetur exercitation",
            "analytedate": "11/23/2021",
            "description": "SARS-CoV-2 (COVID-19) IgM Ab [Units/volume] in Serum or Plasma by Immunoassay",
            "units": "mhg",
            "referencerange": "80-120",
            "resultstatus": "corrected",
            "analytename": "tempor",
            "abnormalflag": "delta",
            "analyteid": 7872,
            "analytedatetime": "11/23/2021 00:00:00",
            "value": "120",
            "loinc": "94506-3",
            "status": "delta"
        }
    ]
};

// Create a new mapper that will always use the "myCustomMappings" file
const myCustomMapper = new Ditto({
    category: {
        "output": [],
        "innerDocument": "!",
        "mappings": {
            coding: {
                "output": [],
                "innerDocument": "analytes",
                "mappings": {
                    "display": "description",
                    "value": "value"
                }
            }
        }
    }
});

// Call the unify function that will read the "documentToBeUnified" and transforms it via the mapping file
myCustomMapper.unify(jsonData).then((result) => {
    console.log(JSON.stringify(result, null, 2));
});
