# Alternative to Metronic Template using Plain Bootstrap

## How to Run App:
### 1. Build App:
```shell
make build
```
#### OR
```shell
docker build --no-cache -t react-prod:latest .
```

### 2. Start App:
```shell
make start
```
#### OR
```shell
docker run --name madagascar --rm -d -p 8080:8080 react-prod:latest
```

### 3. Stop App:
```shell
make stop
```
#### OR
```shell
docker stop madagascar
```

## Template Functionality
- [ ] Router
- [ ] Error Page 
- [x] Dashboard Page with Sidebar and Nav
- [ ] i18n (Localization)
- [ ] Custom Icons