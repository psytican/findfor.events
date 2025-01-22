#   Development step by step
##  Start docker compose
```
cd ./docker
docker compose build
docker network create findforevents-network
docker compose up -d
```
##  Create Symfony project
```
docker exec -it findforevents--launchpad bash
composer create-project symfony/skeleton:"7.1.*" .
composer require symfony/twig-bundle
```
##  Install frontend framework
```
composer require symfony/webpack-encore-bundle
npm install @symfony/webpack-encore --save-dev
npm install react react-dom @babel/preset-react --save-dev
npm install @babel/plugin-transform-class-properties --save-dev
npm install @babel/plugin-transform-runtime --save-dev
npm install sass-loader sass --save-dev
npm install axios --save
npm install react-router-dom @reduxjs/toolkit react-redux --save-dev
npm install @heroui/react framer-motion
npm install -D tailwindcss postcss postcss-loader autoprefixer
npx tailwindcss init -p
npm install @heroicons/react
```
##  Live development
```
npm run watch
```