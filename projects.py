import urllib.request
import json

URL = 'https://api.github.com/users/janmarkuslanger/repos'

with urllib.request.urlopen(URL) as response:
    data = json.loads(response.read().decode('utf-8'))
    with open('projects.json', 'w') as file:
        file.write(json.dumps(data))
    