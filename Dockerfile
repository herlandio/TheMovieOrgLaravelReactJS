FROM php

ARG ARG_TOKEN

ENV M_TOKEN = $ARG_TOKEN

RUN apt-get update && \
    apt-get install -y \
        zlib1g-dev \
        libzip-dev \
        zip \
        libonig-dev \
        libxml2-dev \
        apt-transport-https \
        ca-certificates \
        curl \
        software-properties-common

RUN docker-php-ext-install \
        bcmath \
        ctype \
        fileinfo \
        mbstring \
        pdo \
        pdo_mysql \
        xml

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

WORKDIR /app

COPY ./apithemovieorg .

RUN composer install --optimize-autoloader --no-dev --ignore-platform-reqs

RUN cp .env.example .env

RUN php artisan key:generate

RUN php artisan config:cache

RUN php artisan route:cache

RUN php artisan view:cache

CMD php artisan serve

EXPOSE 8000