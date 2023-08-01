Проект "Cайт фитнес тренировок" - приложение, в котором пользователи могут смотреть упражнения для тренировок и отслеживать свой прогресс.

Командный проект, написанный с помощью React и Redux.
Стилизация компонентов осуществляется через Styled Components.
В проекте для базы данных и авторизации использован Google Firebase.
Настроены авторизация, protected routes.

Проект состоит из:

1. Список курсов
  На странице отображены все курсы, имеющиеся в базе данных. На странице работает пагинация.
2. Описание курса 
  По клику на выбранный курс неавторизованный пользователь или пользователь, не приобретавший данный курс, попадает на страницу, где может ознакомиться с его описанием.
3. Страницы авторизации
  На данной странице пользователь имеет возможность зарегистрироваться или войти в свой аккаунт.
4. Мой профиль
  На странице "Мой профиль" пользователь имеет возможность редактировать свой профиль (сменить логин и пароль). А также просматривать приобретенные курсы.
  Интерфейс добавления курсов для конкретных пользователей со стороны фронтенда не предусмотрен. Подразумевается, что курсы будут добавлены администратором, функционал, который не реализуется в рамках этой курсовой. Поэтому курсы пользователю добавляются напрямую в БД.
5. Выбор тренировки.
  По клику на выбранную тренировку в своём профиле пользователь попадает на страницу, где может открывать материалы урока (видеоролики на YouTube).
6. Страница видеоурока с упражнениями.
   Например, если это тренировка по йоге, то пользователю необходимо сделать: наклоны вперед (10 повторений), наклоны назад (10 повторений) и поднятие ног, согнутых в коленях (5 повторений). Пользователь должен видеть эти задания и иметь возможность заполнить свой прогресс, а приложение должно уметь высчитывать, на сколько процентов пользователь справился с заданием. При выходе из аккаунта или перезагрузки страницы прогресс пользователя сохраняется.
