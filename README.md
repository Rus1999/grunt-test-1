# Grunt Getting Start Project

## Grunt installation

Update Node.js (create package.json)
```bash
  npm init -y
```

Install globally (install grunt cli)
```bash
  npm install grunt-cli -g
```

Install locally (install grunt in node_modules)
```bash
  npm install grunt --save-dev
```

Install uglify (minifying files)
```bash
  npm install grunt-contrib-uglify --save-dev
```

Install concatenate (concatenate files)
```bash
  npm install grunt-contrib-concat --save-dev
```

## Grunt Command

Run uglify task
```bash
  grunt uglify
```

Run Concatenate task
```bash
  grunt concat
```