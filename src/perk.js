const {mapToNewObject} = require('@perpk/json-xform');

const source = {
    highLevel: [
        {
            fieldOne: 1,
            fieldTwo: 2,
            lowLevel: [
                {
                    fieldThree: 3,
                    fieldFour: 4,
                    basement: [
                        {
                            this: {
                                thing: {
                                    there: 'here I am'
                                }
                            }
                        }
                    ]
                }
            ]
        }
    ]
};

const mapping = {
    fieldset: [
        {
            fromEach: {
                field: 'highLevel',
                to: 'flat',
                flatten: true,
                fieldset: [
                    {
                        from: 'fieldOne'
                    },
                    {
                        from: 'fieldTwo'
                    },
                    {
                        to: 'newProp',
                        withTemplate: '${fieldOne} is not ${fieldTwo}'
                    },
                    {
                        fromEach: {
                            field: 'lowLevel',
                            flatten: true,
                            fieldset: [
                                {
                                    from: 'fieldThree'
                                },
                                {
                                    from: 'fieldFour'
                                },
                                {
                                    fromEach: {
                                        field: 'basement',
                                        fieldset: [
                                            {
                                                from: 'this.thing.there',
                                                to: 'that.here'
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        }
    ]
};

console.log(JSON.stringify(mapToNewObject(source, mapping)));