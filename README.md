## Описание

Веб-приложение предоставляет функционал регистрации и авторизации через REST API. Авторизация выполняется с помощью **JWT**. Для регистрации обязательны email, имя и пароль пользователя.

Frontend и backend выполнены как отдельные проекты.

Использованные технологии:

- Spring Boot

- Vue

- JWT authorization

- Liquibase

### endpoints

- `POST /register` - регистрация пользователя. Обязательные параметры: *email*, *firstName*, *password*. Параметр *lastName* опциональный. Если не заполнен один из обязательных параметров возвращается status code **400 BAD_REQUEST**. В случае успеха вернется status code **201 CREATED**. 

  Пример тела запроса:
  
  ```json
  {
    "email": "email@mail.ru",
    "firstName": "Alex",
    "password": "password",
    "lastName": "Smith"
  }
  ```

- `POST /auth` - получение **JWT** зарегистрированным пользователем. 

  Пример тела запроса:
  
  ```json
  {
    "email": "email@mail.ru",
    "password": "password"
  }
  ```
  В случае отправки запроса на данный endpoint с не валидными данными также вернется status code **400 BAD_REQUEST**.

- `GET /hello` - возвращает строку "Hello, &lt;authorized user&gt;", где вместо &lt;authorized user&gt; выводится имя авторизованного пользователя. Данный endpoint доступен только авторизованным пользователям. В противном случае вернется status code **401 FORBIDDEN**.

## Сборка и запуск проекта

### Запуск с помощью Docker

TODO

### Запуск без использования Docker

Для работы backend требуется JDK версии 8 или выше.

Сейчас в проекте указана версия JDK 11. Если будет использоваться более низкая версия, нужно указать ее в параметре java.version в файле pom.xml.

Для работы frontend требуется Node.js и npm.

#### Запуск backend

- Клонировать проект

  `git clone https://github.com/ignal1/vue_spring_jwt_reg_and_auth.git`

- Перейти в директорию *backend* и в терминале выполнить команду

  `./mvnw spring-boot:run` (для Linux)
  
  или
  
  `mvnw spring-boot:run` (для Windows)

#### Запуск frontend

- В новом окне терминала перейти в директорию *frontend* и  выполнить команды

  ```
  npm install
  npm run serve
  ```

  После этого приложение будет доступно на *loclhost:8080*.