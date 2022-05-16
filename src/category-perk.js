const {mapToNewObject} = require('@perpk/json-xform');

const source = {
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
    ],
    "labresultnote": "irure proident eiusmod",
    "resultstatus": "final",
    "isreviewedbyprovider": "1",
    "providerid": 71,
    "internalnote": "est q",
    "description": "lab result",
    "labresultid": 157487,
    "priority": "2",
    "attachmentexists": false
};

const mapping = {
    fieldset: [
        {
            from: 'description',
            to: 'category.coding.value'
        }
    ]
};
// const mapping = {
//     fieldset: [
//         {
//             fromEach: {
//                 field: 'analytes',
//                 to: 'category',
//                 flatten: false,
//                 fieldset: [
//                     {
//                         fromEach: {
//                             field: '',
//                             to: 'coding',
//                             flatten: false,
//                             fieldset: [
//                                 {
//                                     from: 'description',
//                                     to: 'coding.display'
//                                 },
//                                 {
//                                     from: 'value',
//                                     to: 'coding.value'
//                                 }
//                             ]
//                         }
//                     }
//                 ]
//             }
//         }
//     ]
// };


// const mapping = {
//     fieldset: [
//         {
//             fromEach: {
//                 field: 'analytes',
//                 to: 'category',
//                 flatten: true,
//                 fieldset: [
//                     {
//                         from: 'description',
//                         to: 'display'
//                     },
//                     {
//                         from: 'value',
//                         to: 'value'
//                     }
//                 ]
//             }
//         }
//     ]
// };

console.log(JSON.stringify(mapToNewObject(source, mapping)));