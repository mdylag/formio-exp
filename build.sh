BUILD_FE="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
rm -rf $BUILD_FE/lib/*
cd $BUILD_FE
npm run build
npm link


