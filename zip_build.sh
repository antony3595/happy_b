#!/bin/bash
set -e

npm run build
cd build/
zip -r build.zip ./
mv build.zip ../
cd ..
