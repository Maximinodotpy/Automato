import webview
import os


currentFile = ''
appName = 'Automato'


def test(string): 
    print(string)

def requestContent():
    global currentFile

    if (not currentFile): return []

    with open(currentFile, 'r') as f:
        content = f.read()

        return content

def openFile():
    global currentFile

    result = window.create_file_dialog(webview.OPEN_DIALOG, allow_multiple=False)

    if (result == None): return 'CANCELED'

    currentFile = result[0]

    window.set_title(appName + ' - ' + currentFile)

    with open(result[0], 'r') as f:
        content = f.read()

        return content

def saveFile(content):
    global currentFile

    print('Current File Name ', currentFile)
    print(type(content))
    if currentFile == '':
        print('None Opened so first cono')
        currentFile = window.create_file_dialog(webview.SAVE_DIALOG, allow_multiple=False)

        window.set_title(appName + ' - ' + currentFile)

    with open(currentFile, 'w') as f:
        f.write(content)

def runFile():
    global currentFile

    os.system('cmd /c run.py "'+currentFile+'"')

def requestOpenFiles():
    print('föalskdjf')

def fjksldaöaf():
    pass

window = webview.create_window(
    appName + ' - New File',
    'index.html',
    text_select=True,
)

window.expose(
    test,
    openFile,
    saveFile,
    runFile,
    requestContent,
    requestOpenFiles,
)

webview.start(http_server=True, debug=True)