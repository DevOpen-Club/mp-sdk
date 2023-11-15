rm -rf es lib

tsc --module ES2015 --outDir es
tsc --module CommonJS --outDir lib
