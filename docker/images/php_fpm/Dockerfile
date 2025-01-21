FROM php:8.4.3-fpm

RUN apt-get update -yqq && apt-get upgrade -yqq
RUN apt-get install -yqq \
    supervisor gnupg git wget curl libpng-dev libzip-dev zip librdkafka-dev

RUN docker-php-ext-install \
    gd zip

RUN pecl install redis \
    && docker-php-ext-enable redis

RUN docker-php-ext-install pdo pdo_mysql

RUN pecl install rdkafka \
    && docker-php-ext-enable rdkafka

WORKDIR /opt/app

RUN usermod -u 1000 www-data