(function(global){
  'use strict';
  // AK Studio client data. Source: repository business.json and Yandex Maps.
  // Prices below are the limited published price indicators, not a complete price list.
  const t=(ru='',en='',hy='',uz='',tg='')=>({ru,en,hy,uz,tg});
  // Approved universal copy. Keep it unchanged for every salon.
  const heroDescription=t(
    'Ваша красота. Ваша уверенность.',
    'Your beauty. Your confidence.',
    'Ձեր գեղեցկությունը։ Ձեր վստահությունը։'
  );
  const about=t(
    'В основе нашей работы — профессиональный подход, внимание к деталям и уважение к индивидуальности каждого гостя. Мы создаём комфортное пространство, где качество и забота остаются главным приоритетом.',
    'Our work is built on professionalism, attention to detail, and respect for every guest’s individuality. We create a comfortable space where quality and care remain our highest priorities.',
    'Մեր աշխատանքի հիմքում մասնագիտական մոտեցումն է, ուշադրությունը մանրուքներին և հարգանքը յուրաքանչյուր հյուրի անհատականության նկատմամբ։ Մենք ստեղծում ենք հարմարավետ միջավայր, որտեղ որակն ու հոգատարությունը մնում են գլխավոր առաջնահերթությունները։'
  );
  const photo=(file,ru,en)=>({src:file,alt:t(ru,en)});
  const hairPhotos=[
    photo('gallery-01.webp','Окрашивание волос','Hair color work'),
    photo('gallery-02.webp','Женская стрижка',"Women's haircut"),
    photo('gallery-03.webp','Укладка и стрижка','Hair styling and haircut'),
    photo('gallery-04.webp','Окрашивание и укладка','Hair coloring and styling'),
    photo('gallery-05.webp','Короткая женская стрижка',"Short women's haircut")
  ];
  const salonPhotos=[
    photo('gallery-06.webp','Вход в АК Студию','AK Studio entrance'),
    photo('gallery-07.webp','Фасад АК Студии','AK Studio facade'),
    photo('gallery-08.webp','Интерьер салона','Salon interior'),
    photo('gallery-09.webp','Интерьер и зона ожидания','Salon waiting area'),
    photo('gallery-10.webp','Зона ожидания','Waiting area'),
    photo('gallery-11.webp','Здание салона','Salon building'),
    photo('gallery-12.webp','Расположение салона','Salon location'),
    photo('gallery-13.webp','Кабинет салона','Salon treatment room')
  ];
  const reviewsUrl='https://yandex.ru/maps/org/ak_studiya/45971298122/reviews/';
  const review=(id,author,ru,en)=>({
    id,author:t(author,author),text:t(ru,en),rating:5,
    source:t('Яндекс Карты','Yandex Maps'),url:reviewsUrl
  });
  const data={
    schemaVersion:1,
    mode:'production',
    country:'RU', // RU: ru/en; AM: ru/en/hy; UZ: ru/en/uz; TJ: ru/en/tg
    locales:['ru','en'],
    defaultLocale:'ru',
    // city/address are short UI strings; fullAddress keeps the verified full postal/admin address for maps and metadata.
    salon:{
      name:t('АК Студия','AK Studio'),
      kind:t('Салон красоты','Beauty salon','Գեղեցկության սրահ'),
      city:t('п. Красково','Kraskovo'),
      address:t('ул. Карла Маркса, 1','1 Karla Marksa Street'),
      fullAddress:t(
        'Московская область, городской округ Люберцы, посёлок городского типа Красково, улица Карла Маркса, 1, 140050',
        '1 Karla Marksa Street, Kraskovo, Lyubertsy Urban District, Moscow Oblast, 140050, Russia'
      ),heroDescription,about
    },
    schedule:{
      timezone:'Europe/Moscow',
      periods:[{days:[2,3,4,5,6,7],open:'11:00',close:'21:00'}],
      fallback:t('По предварительной записи','By appointment')
    },
    contacts:{phone:'+7 (495) 567-37-27',phoneLabel:t('Позвонить','Call','Զանգահարել'),
      messengerUrl:'',messengerLabel:t('Написать','Message','Գրել'),messengerHandle:'',
      mapUrl:'https://yandex.ru/maps/org/ak_studiya/45971298122/',
      mapEmbedUrl:'https://yandex.ru/map-widget/v1/?oid=45971298122',
      reviewsUrl,booking:[]},
    rating:{value:4.3,count:59},
    // Media contract: hero.webp -> hero[0], profile.webp -> about, gallery-01.webp...gallery-25.webp -> portfolio/gallery, optional transparent logo.*.
    media:{
      logo:'',
      hero:[photo('hero.webp','Интерьер АК Студии','AK Studio interior')],
      about:'profile.webp',
      // Exactly 7 preview photos on both mobile and desktop; the full gallery remains complete.
      portfolio:[...hairPhotos,salonPhotos[2],salonPhotos[3]],
      gallery:{'Волосы':hairPhotos,'Салон':salonPhotos},
      desktopGalleryLimits:{'Волосы':5,'Салон':8}
    },
    categoryLabels:{
      'Волосы':t('Волосы','Hair'),
      'Маникюр':t('Маникюр','Manicure')
    },
    categoryOrder:['Волосы','Маникюр'],
    services:[
      {id:'hair-womens-cut',category:'Волосы',title:t('Женская стрижка',"Women's haircut"),price:'2 500 ₽',duration:'',description:t(),variants:[]},
      {id:'hair-mens-cut',category:'Волосы',title:t('Мужская стрижка',"Men's haircut"),price:'2 000 ₽',duration:'',description:t(),variants:[]},
      {id:'nails-classic-coating',category:'Маникюр',title:t('Классический женский маникюр с покрытием','Classic manicure with coating'),price:'2 000–2 500 ₽',duration:'',description:t(),variants:[]},
      {id:'nails-combined',category:'Маникюр',title:t('Комбинированный маникюр','Combined manicure'),price:'900–1 300 ₽',duration:'',description:t(),variants:[]}
    ],
    team:[],
    reviews:[
      review('review-angelina','Ангелина','Впервые посетила эту студию, впрочем как и косметолога в целом. Очень рекомендую косметолога Людмилу Ивановну. Супер!','It was my first visit to this studio and to a cosmetologist. I highly recommend Lyudmila Ivanovna. Excellent!'),
      review('review-sergey','Сергей П.','Мастер Карен Король своего дела, стрижет очень качественно, в салоне всегда чисто, приятная музыка, хожу только к нему!','Karen is a true master of his craft. Excellent haircuts, always clean, with pleasant music. I only go to him!'),
      review('review-olga','Ольга Щ.','Делаю маникюр и педикюр у Валентины. Мастер профессионал своего дела. Ношу 3 недели лак, ни одного скола. Всё ровно и аккуратно.','I get my manicure and pedicure from Valentina. A true professional. My polish lasts three weeks without a chip. Everything is neat and even.'),
      review('review-shishkina','shishkina3112','В салоне работает самый прекрасный мастер по маникюру Валентина. Хожу к ней уже больше 5 лет, все отлично! В самом салоне всегда чисто, играет приятная музыка и прекрасная атмосфера! ❤️','Valentina is a wonderful nail technician. I have been visiting her for over five years and everything is great! The salon is always clean, with nice music and a lovely atmosphere! ❤️'),
      review('review-irina','Ирина Гришина','Карен просто супер! Косметолог Людмила супер!','Karen is fantastic! Lyudmila the cosmetologist is fantastic too!'),
      review('review-igor','Игорь И.','Отличный салон, теперь только туда! Карен очень приветливый и мастер своего дела! Долго искал хорошего мастера.','Excellent salon, now I only go there! Karen is welcoming and truly skilled. I had been looking for a good stylist for a long time.'),
      review('review-natalia','Наталия З','Была несколько раз делала брови,попадала к разным мастерам и все меня устраивали.В салоне всегда чисто.','I had my eyebrows done several times by different specialists and was happy every time. The salon is always clean.'),
      review('review-art','Art 1','Стригусь не первый год. Все очень нравится. И отношение и мастерство. Спасибо Вам большое','I have been getting my hair cut here for years. I like everything, both the attitude and the skill. Thank you so much!'),
      review('review-dmitriy','Дмитрий','Отличный салон, домашняя атмосфера, а главное замечательный мастер к которому хожу не первый год.','Excellent salon, homely atmosphere, and above all a wonderful stylist whom I have visited for years.')
    ]
  };
  global.TANEM_SITE_DATA=data;
  const rows=[];
  const collect=value=>{
    if(!value||typeof value!=='object')return;
    if(typeof value.ru==='string'&&typeof value.en==='string'&&typeof value.hy==='string'){
      if(value.ru)rows.push([value.ru,value.hy,value.en]);
      return;
    }
    if(Array.isArray(value))value.forEach(collect);
    else Object.values(value).forEach(collect);
  };
  collect(data);
  global.TANEM_SITE_I18N_ROWS=rows;
})(window);
