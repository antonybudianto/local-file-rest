# local-file-rest

Easy file transfer with REST for server-to-server

```
npm i
node index.js
```

```
curl -F "file=@index.js" http://localhost:5000/api/file | json_pp

{
   "destination" : "uploads/",
   "encoding" : "7bit",
   "fieldname" : "file",
   "filename" : "b12573521548c73f76605e490aa5cceb",
   "mimetype" : "application/octet-stream",
   "originalname" : "index.js",
   "path" : "uploads/b12573521548c73f76605e490aa5cceb",
   "size" : 185
}
```

## License

MIT
