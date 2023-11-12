rm -rf es lib

tsc --module ES2015 --outDir es
tsc --module CommonJS --outDir lib

copyfiles -u 1 "src/**/*.js" "src/**/*.d.ts" "src/**/*.map" es
copyfiles -u 1 "src/**/*.js" "src/**/*.d.ts" "src/**/*.map" lib
