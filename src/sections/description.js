import { anyElement } from "../components/elements.js"



export let introText = anyElement("div", ['descr-base','descr-intro'])
introText.innerHTML = '<p>Привет, я Макс!</p> <p>Представляю Backend Pet портфолио.</p><p>Здесь представлены микросервисы с базовой функциональностью.</p>\
<br><p style ="font-size: 34px;">Используемые технологии:</p>'

export let techText1 = anyElement("div", ['descr-base','descr-tech'])
techText1.classList.add()
techText1.innerHTML = '<p>Python - основной язык</p>\
<p>JavaScript</p>\
<p>FastAPI (Hypercorn)</p>\
<p>WebSockets</p>\
<p>Postgresql</p>\
<p>SqlAlchemy 2.0</p>\
<p>MongoDB</p>\
<p>Redis</p>\
<p>Apache Kafka</p>\
<p>Faust</p>\
<p>Sentry</p>'

export let techText2 = anyElement("div", ['descr-base','descr-tech2'])
techText2.innerHTML = '<p>Prometheus</p>\
<p>Grafana</p>\
<p>Pytest</p>\
<p>Nginx</p>\
<p>Traegik</p>\
<p>Docker</p>\
<p>Portainer</p>\
<p>Git</p>\
<p>Linux</p>\
<p>Webpack</p>\
<p>Html/Css</p>'

export let estateText = anyElement("div", ['descr-base','descr-estate'])
estateText.innerHTML = '<p>В данном блоке реализован backend и полностью переписан frontend на javascript (vanila)!</p>'

export let cosmoText = anyElement("div", ['descr-base','descr-cosmo'])
cosmoText.innerHTML = '<p>В данном блоке реализован функционал уведомления по обработке и доставке товара \
Для проверки необходимо зайти на сайт далее нажать "каталог", далее добавить товар в "корзину", далее "мои заказы", далее нажать на демо-заказ. Также написан backend каталога, фильтрация по тегам и категориям frontend затронут частично!</p>'

export let jwtText = anyElement("div", ['descr-base','descr-jwt'])
jwtText.innerHTML = '<p>В данном блоке реализован функционал обновления JWT токена. Особенность в том, что вся логика верификации пользователя завязана на refresh-jwt, а не на access-jwt. Это позволяет исключить уязвимость при хранении токена на стороне клиента. В моей реализации фоновое обновление происходит не по таймеру, а при кликах по ссылкам. Jwt попадает на клиент в виде httpOnly Cookie. Что защищает от CSRF атак! </p>'

export let aboutText = anyElement("div", ['descr-base','descr-adout'])
aboutText.innerHTML = '<p>\
Меня зовут, Максим! Я Backend! Программирую с 2020 года. Основной язык python. Пишу API сервисы преимущественно на FastApi. К любому делу отношусь ответственно. Проспал, забыл, опоздал это не про меня! Люблю кошек!\
</p><p>Road map развития:  Web3, Blockchain, DeFi, dApps, ML</p> <p>Профиль на GitHub новый из-за блокировки России.</p><br>'

