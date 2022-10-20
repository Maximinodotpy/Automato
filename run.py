import json
import webbrowser
import sys
import os

types = {
  "CREATE_VAR": {
    "name": "Create Variable",
    "functionName": "createVar",
    "desctiption": "asdfasdf",
    "category": "LOGIC",
    "parameters": [
      {
        "nameLong": "Variable Name",
        "nameShort": "name",
        "defaultValue": "var",
        "type": "string",
        "typeSpecificInfo": {
          "min": 1,
        }
      },
      {
        "nameLong": "Variable Type",
        "nameShort": "type",
        "defaultValue": "string",
        "type": "selection",
        "typeSpecificInfo": {
          "selectable": [
            "string",
            "number"
          ]
        }
      },
      {
        "nameLong": "Value",
        "nameShort": "value",
        "defaultValue": "Hello World",
        "type": "string",
        "typeSpecificInfo": {
          "min": 1,
        }
      }
    ]
  },
  "FLOW CONTROL": {
    "name": "Flow Control",
    "functionName": "flowControl",
    "category": "LOGIC",
    "desctiption": "asdfasdf",
    "parameters": [
      {
        "nameLong": "Expression",
        "nameShort": "expr",
        "defaultValue": "5 == 5",
        "type": "string",
        "typeSpecificInfo": {
          "min": 1
        }
      }
    ],
    "childTasks": []
  },
  "OPEN_WEBSITES": {
    "name": "Open Websites",
    "functionName": "openWebsites",
    "category": "OPEN",
    "desctiption": "asdfasdf",
    "parameters": [
      {
        "nameLong": "Links",
        "nameShort": "urls",
        "defaultValue": [
          "https://maximmaeder.com"
        ],
        "type": "string-list",
        "typeSpecificInfo": {
          "min": 1
        }
      }
    ]
  },
  "OPEN_PROGRAMMS": {
    "name": "Open Programm",
    "functionName": "openPrograms",
    "category": "OPEN",
    "desctiption": "Open Programms automatically with this Task",
    "parameters": [
      {
        "nameLong": "Programm Paths",
        "nameShort": "paths",
        "defaultValue": [
          "calc.exe"
        ],
        "type": "path-list",
        "typeSpecificInfo": {
          "mode": "files"
        }
      }
    ]
  }
}

class run():
    def __init__(self, filePath):
        self.VARIABLES = {}

        with open(filePath, 'r') as f:
            tasks = json.load(f)

        self.do(tasks)





    def do(self, tasks):
        for task in tasks:
            print('Excuting Task: ' + task['name'])

            if (task['disabled']): return
            
            fName = types[task['type']]['functionName']

            if 'childTasks' in task.keys():
                getattr(locals()['self'], fName)(task['parameters'], task['childTasks'])

            else:
                getattr(locals()['self'], fName)(task['parameters'])
            
            print(f'Variables: {self.VARIABLES}')

    def resolveString(self, string):
        for key in self.VARIABLES:

            if isinstance(self.VARIABLES[key], str):
                string = string.replace('{' + key + '}', '"' + self.VARIABLES[key] + '"')
            else:
                string = string.replace('{' + key + '}', self.VARIABLES[key])

        return string
            
    def createVar(self, args):
        print('Initiating Variable')

        self.VARIABLES[args['name']] = args['value']

    def openWebsites(self, args):
        print('Open Website')

        for link in args['urls']:
            webbrowser.open(self.resolveString(link))

    def flowControl(self, args, children):
        print('If Statement: '+self.resolveString(args['expr']))

        if eval(self.resolveString(args['expr'])):
            self.do(children)

    def openPrograms(self, args):
        print('Open Program')            

        for link in args['paths']:
            os.system(f'start {self.resolveString(link)}')


if __name__ == '__main__':
    print('-------------------------', sys.argv[1])
    run(sys.argv[1])