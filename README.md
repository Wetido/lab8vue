#Technologie
```
1. NodeJs
2. VueJs
3. http-server
```

#Niezbędne dependencje:
```
RUN npm install -g @vue/cli-service-global
RUN npm install -g @vue/cli
RUN npm install http-server -g
```

#Uruchomienie projektu lokalnie
```
npm install - instalacja depencencji dodanych w package.json
npm run build - zbudowanie aplikacji
npm run start - uruchomienie aplikacji
npm run test - uruchomienie testów aplikacji
```

# Sprawozdanie lab 8
## Wykonanie:
1. Utworzenie projektu vue polecenie vue init.
2. Opracowanie projektu zawierającego rozwiązanie Fibonacciego.
3. Opracowanie pliku Dockerfile który służącego do stworzenia obrazu zbudowanej aplikacji.
4. Opracowanie pliku docker-compose.yml pozwalącego na uruchomienie aplikacji na serwerze http i uruchomienie testów.
5. Utworzenie repozytorium ze zmianami.

## Uruchomienie z pomocą docker
1. Sklonowanie repozytorium na dysk poleceniem git clone.
2. Zbudowanie i uruchomienie kontenera przy pomocy polecenia ```docker compose up``` lub polecenia```COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker compose up```
   (wymagana instalacja docker build kit oraz docker compose wersja 2.).
3. Aplikacja będzie dostępna na ```http://localhost:8080```.
4. Wyniki testów będą dostępne w konsoli.
