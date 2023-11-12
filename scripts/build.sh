rm -rf es lib

tsc --module ES2015 --outDir es
tsc --module CommonJS --outDir lib

copyfiles -u 1 "src/**/*.js" "src/**/*.d.ts" es
copyfiles -u 1 "src/**/*.js" "src/**/*.d.ts" lib
