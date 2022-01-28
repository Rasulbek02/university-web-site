import React from "react";
import { createContext } from "react";
export const NewsContext = createContext();

export const NewsProvider = (props) => {
  const newsSection = [
    {
      month: "янв",
      day: "10",
      title: "Гостевые лекции ",
      text: "23 декабря  для студентов 3 курса IT колледжа и 1 курса ДЦТ прошла гостевая лекция на тему: «Как написать структурированное эссе и подавать заявки в зарубежные ВУЗы».",
      href: "/news1",
    },
    {
      month: "янв",
      day: "12",
      title: "Менторские группы ",
      text: "Мы организовали и запустили в Высшей IT школе три менторские группы по PHP, JS, Web программированию Студенты 3,4 курса, которые успешно работают в IT компаниях, решили помочь с проведением менторских групп. Ребята набрали по выполненным заданиям студентов имеющих желание и навыки. ",
      href: "/news2 ",
    },
    {
      month: "янв",
      day: "15",
      title: "Мастер- класс по фотографированию ",
      text: "15 декабря для студентов Высшей IT -школы проведён Мастер класс по фотографированию . Фотограф Дастан Жуманалы поделился своим опытом и секретами профессиональной деятельности. ",
      href: "/news3",
    },
    {
      month: "янв",
      day: "15",
      title: "Олимпиада по информатике ",
      text: "Весной 2022 года в Высшей IT школе КГЮА планируется Олимпиада по информатике. Заведующая кафедры к.п.н., Сейтеева Мээрим Даткаевна создала рабочую группу  из числа ППС. Планируется отборочный тур, подготовительная часть и проведение Олимпиады. В рамках организации и проведения Олимпиады п о ",
      href: "/news4",
    },
    {
      month: "янв",
      day: "18",
      title: "Турнир по киберспорту",
      text: "Киберспорт (также известен как «компьютерный спорт» или «электронный спорт», англ. esports) — командное или индивидуальное соревнование на основе видеоигр 30 декабря 2021 года среди студентов Высшей IT школы проведён первый турнир по киберспорту,где участвовали 7 команд, 35 участников. ",
      href: "/news5",
    },
    {
      month: "янв",
      day: "20",
      title: "Тренинг по SMM ",
      text: "SMM-специалист продвигает бренд и продукты компании в социальных сетях. Он пишет посты, придумывает конкурсы, подбирает графику, отвечает на комментарии пользователей. Но это не всё. Сегодня задачи SMM-специалиста намного шире.",
      href: "/news6 ",
    },
    {
      month: "янв",
      day: "23",
      title: "Ораторское мастерство",
      text: "10 января большая часть студентов будущие разработчики, тестировщики и прочие технари, а из них подавляющее большинство (по их собственному признанию) интроверты🙇. Между тем в компаниях есть постоянная потребность в спикерах, которые могли бы достойно представлять продукт и компанию, выступая на конференциях, семинарах и других мероприятиях. ",
      href: "/news7",
    },
    {
      month: "янв",
      day: "27",
      title: "День рождения Высшей IT- школы КГЮА ",
      text: "12 декабря Высшей IT -школе Кыргызского государственного юридического университета исполнилось 5 лет За эти 5 лет для IT Академии построена отличная материально-техническая  база. ",
      href: "/news8",
    },
    {
      month: "фев",
      day: "1",
      title: "Talking Club",
      text: "Английский язык является языком мира и рынка труда, тем более, программист обязан знать английский язык. Программист без английского, это как солдат без автомата, поэтому.",
      href: "/news9",
    },
    {
      month: "фев",
      day: "10",
      title: "Золотая середина",
      text: "19 ноября, 2021 года Для студентов колледжа, 2 курса, было организованно мероприятие «ЗОЛОТАЯ СЕРЕДИНА ️»Главной целью праздника было: официальное принятие студентов в большой коллектив IT-колледжа.",
      href: "/news10",
    },
    {
      month: "фев",
      day: "12",
      title: "Посвящение студентов",
      text: "19  и 20-октября  в IT-колледже и Департаменте цифровых технологий состоялось  самое яркое  и значимое  событие – «Посвящение в студенты» Студенческий актив подготовил прекрасный вечер для первокурсников, студенты блеснули талантами и приняли активное участие в различных конкурса",
      href: "/news11",
    },
    {
      month: "фев",
      day: "15",
      title: "Итоги конкурса на лучшее ТикТок видео",
      text: "15 декабря для студентов Высшей IT -школы проведён Мастер класс по фотографированию . Фотограф Дастан Жуманалы поделился своим опытом и секретами профессиональной деятельности. Студенты узнали  все самое основное о студийной фотосъемке, узнали секреты студийных фотографий профессионального уровня.  .",
      href: "/news12",
    },
  ];
  return (
    <NewsContext.Provider value={newsSection}>
      {props.children}
    </NewsContext.Provider>
  );
};
