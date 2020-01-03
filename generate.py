#!/usr/bin/env python3
import os
import sys

NOT_REMOVE = ('.git', 'src', '.gitattributes', '.gitignore', 'generate.py')

os.system('cd src && npm run generate')
os.system('cp -rf src/dist/* ./')
