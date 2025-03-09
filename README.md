# Название проекта

КиноХаос

# Описание - суть, идея, замысел

КиноХаос — портал для киноманов, которые не могут остановиться на одном фильме или сериале. Здесь ты погружаешься в поток контента, где каждый выбор — новое приключение. Мы предлагаем огромный выбор фильмов и сериалов, а также подробную информацию: от рейтингов до биографий актеров.

В КиноХаосе ты найдешь все — от новинок до культовых произведений.

# Скриншоты проекта

![image](https://github.com/user-attachments/assets/2af24b3e-0ae8-490c-9d0f-41eae6ce353d)
![image](https://github.com/user-attachments/assets/72b3c843-b8dd-445e-b16f-3abefcdd65f6)
![image](https://github.com/user-attachments/assets/a7f9f617-e1c0-40c8-940c-fe6c998f97dd)



# Подробная инструкция по запуску

В качестве API было использовано открытое API TMDB (https://www.themoviedb.org/), которое недоступно на территории РФ. 

Для того, чтобы обойти блокировку достаточно включить VPN, либо в настройках системы переключить DNS сервер на 9.9.9.9
<details>
<summary>Гайд по смене DNS-сервера</summary>

(параметры - сети и интернет -  свойства - изменить назначение DNS-сервера - вручную - предпочтительный DNS сервер) 

![image](https://github.com/user-attachments/assets/4c5b14cc-2c68-472f-8551-dd1b1a7e0fe8)
</details>

Для того, чтобы увидеть работу сайта можно перейти по [ссылке](https://movie-project-two-psi.vercel.app/), либо запустить локально, для этого:

+ Склонируйте проект в папку на вашем компьютере

+ `npm i` - для установки зависимостей

+ В файл `env.local.tempate` вставьте ключ авторизации, который можно получить, зарегистрируясь на сайте [TMDB](https://www.themoviedb.org/), либо скопировать снизу (что конечно небезопасно с моей стороны) 
  <details>
    <summary>Секретный ключ</summary>
    Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNWY3OGMwZTJlZTU1NWZkYjgyMTFkMTUzMTBmMmE2ZSIsIm5iZiI6MTc0MDMzODQ1Ny45NDU5OTk5LCJzdWIiOiI2N2JiNzUxOTI0OTJmNDAzNzA0NjRlYjIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.v-K2zQRCeTqhwq5jOXSqIpGnFvIGsxFabjo0hWCcOKI
  </details>

+ Этот файл переименуйте в `env.local`

+ `npm run build` - для сборки проекта

+ `npm run preview` - для запуска сборки
