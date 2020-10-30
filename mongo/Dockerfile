FROM 'mongo'
COPY data.json /data.json
CMD ["mongoimport", "-u", "root", "-p", "rootroot", "--host", "mongodb", "--authenticationDatabase", "admin", "--db", "bipi", "--collection", "cars", "--jsonArray", "--file", "/data.json"]