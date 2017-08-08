# Important: you need Docker to run the app

## Useful links
* Mongo Express: http://localhost:8082/
* Documentation: http://localhost:8080/

### 1. Running in development
```
    git clone https://github.com/apedyashev/usecases-app.git
    cd usecases-app
	docker-compose build
```

### 2. install dependencies in *API* container:
```
	docker-compose run api npm install
```

### 3. seed usecases data:
```
	docker-compose run api npm run migrate
```

### 4. install dependencies in the *Frontend* container:
```
	docker-compose run frontent npm install
```

### 5. run the app:
```
	docker-compose up
```

### 6. Open http://localhost:3000/ in your browser


## Additional commands
### Lint API code
```
	docker-compose run api npm run lint
```

### Lint Frontend code
```
	docker-compose run frontend npm run lint
```
