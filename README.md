URL: https://mystifying-kirch-05efc6.netlify.app/

Уcтановка проекта:

1. npm install - установка зависимостей;

2. Проект развариачивается в `/dist`

3. npm run dev - развертование в режиме development;

4. npm run build - развертование в режиме production;

5. Техническое задание:

5.1. Сделать пустой проект на React.

5.2. Подключить к нему необходимые зависимости, в том числе AgGrid и Leaflet

5.3. Сделать компонент "Верхнее меню", компонент "Главная страница", компонент "Список" и компонент "Карта".

- Компонент "Меню" - обычное верхнее меню, там три пункта - "Главная", "Список", "Карта".

- Компонент "Главная" - просто страница с текстом "Главная страница".

- Компонент "Список" - в нем должен отображаться грид, построенный на компоненте AgGrid. В списке надо отображать данные, взятые сервисом отсюда: http://btn.bz/api/api.php . Отображать столбцы: id, name. При клике на строку отображать карточку - в ней все поля (вышеперечисленные + lat, lon, descr).

- Компонент "Карта" - страница с подключенным leaflet, выводим маркерами на карте все точки с lat и lon, пришедшие из API. При клике на маркер показываем окошко, аналогичное окошку из пункта выше. Идеально использовать для окошка списка и окошка карты один и тот же компонент.

5.4. Для отображения различных элементов вспомогательных - использовать визуальную библиотеку Ant Design. В качестве языка программирования использовать JavaScript.
