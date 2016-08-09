#!/bin/sh

# node http-server
# https://www.npmjs.com/package/http-server

PORT=8124

echo "Starting up http-server, serving ./htdocs"
echo "Available on:"
echo "http://127.0.0.1:${PORT}"

node ./node_modules/http-server/bin/http-server ./htdocs -p ${PORT} -s
