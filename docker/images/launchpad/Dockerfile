FROM php:8.4.3-cli

RUN apt-get update -yqq && apt-get upgrade -yqq
RUN apt-get install -yqq \
    supervisor gnupg git wget curl libzip-dev zip librdkafka-dev

RUN docker-php-ext-install \
    zip

RUN pecl install redis \
    && docker-php-ext-enable redis

RUN docker-php-ext-install pdo pdo_mysql

RUN pecl install rdkafka \
    && docker-php-ext-enable rdkafka

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs \
    && npm install -g npm@latest

RUN usermod -u 1000 www-data

WORKDIR /opt/app

CMD ["/usr/bin/supervisord"]