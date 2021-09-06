# build the nwjs application
./node_modules/nw-builder/bin/nwbuild -p osx64 -o ./build ./public
./node_modules/nw-builder/bin/nwbuild -p win64 -o ./build ./public
./node_modules/nw-builder/bin/nwbuild -p linux64 -o ./build ./public