#!/usr/bin/env python3
import os
import sys

NOT_REMOVE = ('.git', 'src', '.gitattributes', '.gitignore', 'generate.py')

os.system('cd src && npm run generate')
os.system('cp src/dist/* ./../*')

for file in os.listdir('./'):
    if file not in NOT_REMOVE:
        # os.remove('./{}'.format(file))
        print(file)
