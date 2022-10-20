
const locigTaskPrefix = 'LOGIC'
const openTaskPrefix = 'OPEN'

const paramterTemplate = {
    nameLong: 'Variable Name',
    nameShort: 'Name',
    defaultValue: 'var',
    type: 'string',
    typeSpecificInfo: {
        min: 1,
        max: Infinity,
    }
}

export default {
    'CREATE_VAR': {
        name: 'Create Variable',
        functionName: 'createVar',
        desctiption: 'asdfasdf',
        category: locigTaskPrefix,
        parameters: [
            {
                nameLong: 'Variable Name',
                nameShort: 'name',
                defaultValue: 'var',
                type: 'string',
                typeSpecificInfo: {
                    min: 1,
                    max: Infinity,
                }
            },
            {
                nameLong: 'Variable Type',
                nameShort: 'type',
                defaultValue: 'string',
                type: 'selection',
                typeSpecificInfo: {
                    selectable: ['string', 'number']
                }
            },
            {
                nameLong: 'Value',
                nameShort: 'value',
                defaultValue: 'Hello World',
                type: 'string',
                typeSpecificInfo: {
                    min: 1,
                    max: Infinity,
                }
            },
        ]
    },

    'FLOW CONTROL': {
        name: 'Flow Control',
        functionName: 'flowControl',
        category: locigTaskPrefix,
        desctiption: 'asdfasdf',
        parameters: [
            {
                nameLong: 'Expression',
                nameShort: 'expr',
                defaultValue: '5 == 5',
                type: 'string',
                typeSpecificInfo: {
                    min: 1,
                }
            },
        ],
        childTasks: []
    },

    'OPEN_WEBSITES': {
        name: 'Open Websites',
        functionName: 'openWebsites',
        category: openTaskPrefix,
        desctiption: 'asdfasdf',
        parameters: [
            {
                nameLong: 'Links',
                nameShort: 'urls',
                defaultValue: ['https://maximmaeder.com'],
                type: 'string-list',
                typeSpecificInfo: {
                    min: 1,
                }
            },
        ]
    },
    
    'OPEN_PROGRAMMS': {
        name: 'Open Programm',
        functionName: 'openPrograms',
        category: openTaskPrefix,
        desctiption: 'Open Programms automatically with this Task',
        parameters: [
            {
                nameLong: 'Program Paths',
                nameShort: 'paths',
                defaultValue: ['calc.exe'],
                type: 'path-list',
                typeSpecificInfo: {
                    mode: 'files',
                }
            },
        ]
    },
}