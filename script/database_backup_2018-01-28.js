const database = [
    {
        "rok": 2012,
        "data": "2012/10/07",
        "kto": "Trybul",
        "dystans": 10,
        "nazwabiegu": "Biegnij Warszawo",
        "czas": "00:45:36",
        "tempo": "00:04:34"
    },
    {
        "rok": 2012,
        "data": "2012/10/28",
        "kto": "Trybul",
        "dystans": 5,
        "nazwabiegu": "Kręta Piątka",
        "czas": "00:22:44",
        "tempo": "00:04:33"
    },
    {
        "rok": 2012,
        "data": "2012/11/11",
        "kto": "Trybul",
        "dystans": 10,
        "nazwabiegu": "Bieg Niepodległości",
        "czas": "00:42:55",
        "tempo": "00:04:18"
    },
    {
        "rok": 2012,
        "data": "2012/12/02",
        "kto": "Trybul",
        "dystans": 10,
        "nazwabiegu": "Żoliborski Bieg Mikołajkowy",
        "czas": "00:42:44",
        "tempo": "00:04:16",
        "pb": true,
    },
    {
        "rok": 2012,
        "data": "2012/12/08",
        "kto": "Trybul",
        "dystans": 10,
        "nazwabiegu": "Bieg Mikołajkowy",
        "czas": "00:43:48",
        "tempo": "00:04:23",
    },
    {
        "rok": 2013,
        "data": "2013/01/06",
        "kto": "Trybul",
        "dystans": 8,
        "nazwabiegu": "Bieg Noworoczny",
        "czas": "00:31:58",
        "tempo": "00:04:00",
    },
    {
        "rok": 2013,
        "data": "2013/01/20",
        "kto": "Trybul",
        "dystans": 5,
        "nazwabiegu": "Bieg o Puchar Bielan",
        "czas": "00:23:44",
        "tempo": "00:04:45",
    },
    {
        "rok": 2013,
        "data": "2013/06/15",
        "kto": "Trybul",
        "dystans": 5,
        "nazwabiegu": "Bieg Ursynowa",
        "czas": "00:19:26",
        "tempo": "00:03:53",
    },
    {
        "rok": 2013,
        "data": "2013/07/13",
        "kto": "Trybul",
        "dystans": 5,
        "nazwabiegu": "Bieg Morskie Oko",
        "czas": "00:20:24",
        "tempo": "00:04:05",
    },
    {
        "rok": 2013,
        "data": "2013/10/20",
        "kto": "Trybul",
        "dystans": 5,
        "nazwabiegu": "Bieg Przegonić Raka",
        "czas": "00:25:39",
        "tempo": "00:05:08",
    },
    {
        "rok": 2013,
        "data": "2013/11/11",
        "kto": "Trybul",
        "dystans": 10,
        "nazwabiegu": "Bieg Niepodległości",
        "czas": "00:44:26",
        "tempo": "00:04:27",
    },
    {
        "rok": 2013,
        "data": "2013/12/01",
        "kto": "Trybul",
        "dystans": 10,
        "nazwabiegu": "Żoliborski Bieg Mikołajkowy",
        "czas": "00:43:20",
        "tempo": "00:04:20",
    },
    {
        "rok": 2014,
        "data": "2014/01/04",
        "kto": "Trybul",
        "dystans": 8,
        "nazwabiegu": "Bieg Noworoczny",
        "czas": "00:33:54",
        "tempo": "00:04:14"
    },
    {
        "rok": 2014,
        "data": "2014/01/19",
        "kto": "Trybul",
        "dystans": 15,
        "nazwabiegu": "Bieg Chomiczówki",
        "czas": "01:09:32",
        "tempo": "00:04:38",
        "pb": true,
    },
    {
        "rok": 2014,
        "data": "2014/04/13",
        "kto": "Trybul",
        "dystans": 42.2,
        "nazwabiegu": "Orlen Warsaw Marathon",
        "czas": "04:02:36",
        "tempo": "00:05:45"
    },
    {
        "rok": 2014,
        "data": "2014/04/23",
        "kto": "Trybul",
        "dystans": 5,
        "nazwabiegu": "GP Żoliborza 5k",
        "czas": "00:19:55",
        "tempo": "00:03:59"
    },
    {
        "rok": 2014,
        "data": "2014/05/14",
        "kto": "Trybul",
        "dystans": 10,
        "nazwabiegu": "GP Żoliborza 10k",
        "czas": "00:45:18",
        "tempo": "00:04:32"
    },
    {
        "rok": 2014,
        "data": "2014/05/17",
        "kto": "Trybul",
        "dystans": 5,
        "nazwabiegu": "Biegiem na Staż",
        "czas": "00:19:13",
        "tempo": "00:03:51",
        "pb": true,
    },
    {
        "rok": 2014,
        "data": "2014/06/15",
        "kto": "Trybul",
        "dystans": 5,
        "nazwabiegu": "Bieg Ursynowa",
        "czas": "00:20:23",
        "tempo": "00:04:05"
    },
    {
        "rok": 2014,
        "data": "2014/07/26",
        "kto": "Trybul",
        "dystans": 5,
        "nazwabiegu": "Bieg Powstania Warszawskiego 5k",
        "czas": "00:29:24",
        "tempo": "00:05:53"
    },
    {
        "rok": 2014,
        "data": "2014/08/23",
        "kto": "Trybul",
        "dystans": 21.1,
        "nazwabiegu": "Półmaraton Chmielakowy",
        "czas": "01:50:47",
        "tempo": "00:05:15"
    },
    {
        "rok": 2014,
        "data": "2014/08/31",
        "kto": "Trybul",
        "dystans": 21.1,
        "nazwabiegu": "Półmaraton Praski",
        "czas": "01:45:55",
        "tempo": "00:05:01"
    },
    {
        "rok": 2014,
        "data": "2014/09/07",
        "kto": "Trybul",
        "dystans": 10,
        "nazwabiegu": "Bieg przez Most",
        "czas": "00:46:05",
        "tempo": "00:04:37"
    },
    {
        "rok": 2014,
        "data": "2014/09/21",
        "kto": "Trybul",
        "dystans": 10,
        "nazwabiegu": "Bieg Czterech Generałów",
        "czas": "00:46:57",
        "tempo": "00:04:42"
    },
    {
        "rok": 2014,
        "data": "2014/09/21",
        "kto": "Trybul",
        "dystans": 5,
        "nazwabiegu": "Bemowski Bieg Przyjaźni",
        "czas": "00:23:05",
        "tempo": "00:04:37"
    },
    {
        "rok": 2014,
        "data": "2014/09/27",
        "kto": "Trybul",
        "dystans": 10,
        "nazwabiegu": "Bieg Wegański",
        "czas": "00:47:02",
        "tempo": "00:04:42"
    },
    {
        "rok": 2014,
        "data": "2014/10/18",
        "kto": "Trybul",
        "dystans": 21.1,
        "nazwabiegu": "Półmaraton Kampinoski",
        "czas": "01:59:19",
        "tempo": "00:05:39"
    },
    {
        "rok": 2014,
        "data": "2014/11/11",
        "kto": "Trybul",
        "dystans": 10,
        "nazwabiegu": "Bieg Niepodległości",
        "czas": "00:51:57",
        "tempo": "00:05:12"
    },
    {
        "rok": 2014,
        "data": "2014/11/22",
        "kto": "Trybul",
        "dystans": 10,
        "nazwabiegu": "Bieg Entre",
        "czas": "00:47:06",
        "tempo": "00:04:43"
    },
    {
        "rok": 2014,
        "data": "2014/12/07",
        "kto": "Trybul",
        "dystans": 10,
        "nazwabiegu": "Bieg Mikołajów",
        "czas": "00:48:26",
        "tempo": "00:04:51"
    },
    {
        "rok": 2015,
        "data": "2015/01/18",
        "kto": "Trybul",
        "dystans": 15,
        "nazwabiegu": "Bieg Chomiczówki",
        "czas": "01:17:16",
        "tempo": "00:05:09"
    },
    {
        "rok": 2015,
        "data": "2015/03/29",
        "kto": "Trybul",
        "dystans": 21.1,
        "nazwabiegu": "Półmaraton Warszawski",
        "czas": "01:47:04",
        "tempo": "00:05:04"
    },
    {
        "rok": 2015,
        "data": "2015/04/18",
        "kto": "Trybul",
        "dystans": 17.4,
        "nazwabiegu": "Bieg Łosia",
        "czas": "01:28:10",
        "tempo": "00:05:04"
    },
    {
        "rok": 2015,
        "data": "2015/05/03",
        "kto": "Trybul",
        "dystans": 5,
        "nazwabiegu": "Bieg Konstytucji",
        "czas": "00:22:11",
        "tempo": "00:04:26"
    },
    {
        "rok": 2015,
        "data": "2015/05/10",
        "kto": "Trybul",
        "dystans": 10,
        "nazwabiegu": "Bieg Wegański",
        "czas": "00:54:21",
        "tempo": "00:05:26"
    },
    {
        "rok": 2015,
        "data": "2015/05/17",
        "kto": "Trybul",
        "dystans": 42.2,
        "nazwabiegu": "Gdańsk Maraton",
        "czas": "04:03:31",
        "tempo": "00:05:46"
    },
    {
        "rok": 2015,
        "data": "2015/06/13",
        "kto": "Trybul",
        "dystans": 5,
        "nazwabiegu": "Bieg Ursynowa",
        "czas": "00:22:41",
        "tempo": "00:04:32"
    },
    {
        "rok": 2015,
        "data": "2015/07/25",
        "kto": "Trybul",
        "dystans": 5,
        "nazwabiegu": "Bieg Powstania Warszawskiego 5k",
        "czas": "00:24:30",
        "tempo": "00:04:54"
    },
    {
        "rok": 2015,
        "data": "2015/08/22",
        "kto": "Trybul",
        "dystans": 21.1,
        "nazwabiegu": "Półmaraton Chmielakowy",
        "czas": "01:53:56",
        "tempo": "00:05:24"
    },
    {
        "rok": 2015,
        "data": "2015/10/11",
        "kto": "Trybul",
        "dystans": 5,
        "nazwabiegu": "Bemowski Bieg Przyjaźni",
        "czas": "00:22:27",
        "tempo": "00:04:29"
    },
    {
        "rok": 2015,
        "data": "2015/10/17",
        "kto": "Trybul",
        "dystans": 21.1,
        "nazwabiegu": "Półmaraton Kampinoski",
        "czas": "01:49:13",
        "tempo": "00:05:11"
    },
    {
        "rok": 2015,
        "data": "2015/11/11",
        "kto": "Trybul",
        "dystans": 10,
        "nazwabiegu": "Bieg Niepodległości",
        "czas": "00:46:23",
        "tempo": "00:04:38"
    },
    {
        "rok": 2016,
        "data": "2016/01/17",
        "kto": "Trybul",
        "dystans": 15,
        "nazwabiegu": "Bieg Chomiczówki",
        "czas": "01:14:27",
        "tempo": "00:04:58"
    },
    {
        "rok": 2016,
        "data": "2016/04/03",
        "kto": "Trybul",
        "dystans": 21.1,
        "nazwabiegu": "Półmaraton Warszawski",
        "czas": "01:46:38",
        "tempo": "00:05:03"
    },
    {
        "rok": 2016,
        "data": "2016/04/24",
        "kto": "Trybul",
        "dystans": 42.2,
        "nazwabiegu": "Orlen Warsaw Marathon",
        "czas": "04:08:38",
        "tempo": "00:05:54"
    },
    {
        "rok": 2016,
        "data": "2016/05/03",
        "kto": "Trybul",
        "dystans": 5,
        "nazwabiegu": "Bieg Konstytucji",
        "czas": "00:22:42",
        "tempo": "00:04:32"
    },
    {
        "rok": 2016,
        "data": "2016/05/07",
        "kto": "Trybul",
        "dystans": 15.2,
        "nazwabiegu": "Bieg Łosia",
        "czas": "01:21:28",
        "tempo": "00:05:22"
    },
    {
        "rok": 2016,
        "data": "2016/06/11",
        "kto": "Trybul",
        "dystans": 5,
        "nazwabiegu": "Bieg Ursynowa",
        "czas": "00:22:18",
        "tempo": "00:04:28"
    },
    {
        "rok": 2016,
        "data": "2016/07/23",
        "kto": "Trybul",
        "dystans": 10,
        "nazwabiegu": "Bieg Powstania Warszawskiego",
        "czas": "00:48:35",
        "tempo": "00:04:52"
    },
    {
        "rok": 2016,
        "data": "2016/08/15",
        "kto": "Trybul",
        "dystans": 21.1,
        "nazwabiegu": "Cud nad Wisłą",
        "czas": "01:43:44",
        "tempo": "00:04:55"
    },
    {
        "rok": 2016,
        "data": "2016/08/20",
        "kto": "Trybul",
        "dystans": 21.1,
        "nazwabiegu": "Półmaraton Chmielakowy",
        "czas": "01:48:59",
        "tempo": "00:05:10"
    },
    {
        "rok": 2016,
        "data": "2016/08/28",
        "kto": "Trybul",
        "dystans": 21.1,
        "nazwabiegu": "Półmaraton Praski",
        "czas": "01:49:09",
        "tempo": "00:05:10"
    },
    {
        "rok": 2016,
        "data": "2016/09/04",
        "kto": "Trybul",
        "dystans": 10,
        "nazwabiegu": "Bieg przez Most",
        "czas": "00:47:17",
        "tempo": "00:04:44"
    },
    {
        "rok": 2016,
        "data": "2016/09/18",
        "kto": "Trybul",
        "dystans": 10,
        "nazwabiegu": "Bieg Czterech Generałów",
        "czas": "00:45:58",
        "tempo": "00:04:36"
    },
    {
        "rok": 2016,
        "data": "2016/09/25",
        "kto": "Trybul",
        "dystans": 42.2,
        "nazwabiegu": "Maraton Warszawski",
        "czas": "03:56:28",
        "tempo": "00:05:36",
        "pb": true,
    },
    {
        "rok": 2016,
        "data": "2016/11/11",
        "kto": "Trybul",
        "dystans": 10,
        "nazwabiegu": "Bieg Niepodległości",
        "czas": "00:44:41",
        "tempo": "00:04:28"
    },
    {
        "rok": 2016,
        "data": "2016/12/03",
        "kto": "Trybul",
        "dystans": 10,
        "nazwabiegu": "Bieg Mikołajkowy",
        "czas": "00:47:39",
        "tempo": "00:04:46"
    },
    {
        "rok": 2016,
        "data": "2016/12/10",
        "kto": "Trybul",
        "dystans": 10,
        "nazwabiegu": "Praski Bieg Nocny",
        "czas": "00:44:16",
        "tempo": "00:04:26",
    },
    {
        "rok": 2017,
        "data": "2017/01/15",
        "kto": "Trybul",
        "dystans": 15,
        "nazwabiegu": "Bieg Chomiczówki",
        "czas": "01:11:05",
        "tempo": "00:04:44"
    },
    {
        "rok": 2017,
        "data": "2017/03/26",
        "kto": "Trybul",
        "dystans": 21.1,
        "nazwabiegu": "Półmaraton Warszawski",
        "czas": "01:45:36",
        "tempo": "00:05:00"
    },
    {
        "rok": 2017,
        "data": "2017/04/23",
        "kto": "Trybul",
        "dystans": 10,
        "nazwabiegu": "Bieg Oshee",
        "czas": "00:45:47",
        "tempo": "00:04:35"
    },
    {
        "rok": 2017,
        "data": "2017/05/03",
        "kto": "Trybul",
        "dystans": 5,
        "nazwabiegu": "Bieg Konstytucji",
        "czas": "00:21:22",
        "tempo": "00:04:16"
    },
    {
        "rok": 2017,
        "data": "2017/05/07",
        "kto": "Trybul",
        "dystans": 10,
        "nazwabiegu": "Bieg Wegański",
        "czas": "00:48:48",
        "tempo": "00:04:53"
    },
    {
        "rok": 2017,
        "data": "2017/05/14",
        "kto": "Trybul",
        "dystans": 21.1,
        "nazwabiegu": "Półmaraton Białystok",
        "czas": "01:40:45",
        "tempo": "00:04:46"
    },
    {
        "rok": 2017,
        "data": "2017/05/28",
        "kto": "Trybul",
        "dystans": 15,
        "nazwabiegu": "Mazowiecka Piętnastka",
        "czas": "01:12:06",
        "tempo": "00:04:48"
    },
    {
        "rok": 2017,
        "data": "2017/06/03",
        "kto": "Trybul",
        "dystans": 5,
        "nazwabiegu": "Bieg Ursynowa",
        "czas": "00:20:29",
        "tempo": "00:04:06"
    },
    {
        "rok": 2017,
        "data": "2017/06/10",
        "kto": "Trybul",
        "dystans": 4.2,
        "nazwabiegu": "Bieg Firmowy",
        "czas": "00:17:25",
        "tempo": "00:04:08"
    },
    {
        "rok": 2017,
        "data": "2017/06/25",
        "kto": "Trybul",
        "dystans": 10,
        "nazwabiegu": "Bieg Platerów",
        "czas": "00:44:23",
        "tempo": "00:04:26"
    },
    {
        "rok": 2017,
        "data": "2017/07/29",
        "kto": "Trybul",
        "dystans": 10,
        "nazwabiegu": "Bieg Powstania Warszawskiego",
        "czas": "00:47:47",
        "tempo": "00:04:46"
    },
    {
        "rok": 2017,
        "data": "2017/08/15",
        "kto": "Trybul",
        "dystans": 21.1,
        "nazwabiegu": "Cud nad Wisłą",
        "czas": "01:42:14",
        "tempo": "00:04:51"
    },
    {
        "rok": 2017,
        "data": "2017/08/19",
        "kto": "Trybul",
        "dystans": 21.1,
        "nazwabiegu": "Półmaraton Chmielakowy",
        "czas": "01:47:04",
        "tempo": "00:05:04"
    },
    {
        "rok": 2017,
        "data": "2017/09/03",
        "kto": "Trybul",
        "dystans": 21.1,
        "nazwabiegu": "Półmaraton w Pile",
        "czas": "01:38:59",
        "tempo": "00:04:41",
        "pb": true,
    },
    {
        "rok": 2017,
        "data": "2017/09/17",
        "kto": "Trybul",
        "dystans": 21.1,
        "nazwabiegu": "Bieg Lechitów Gniezno",
        "czas": "01:43:52",
        "tempo": "00:04:55"
    },
    {
        "rok": 2017,
        "data": "2017/10/15",
        "kto": "Trybul",
        "dystans": 21.1,
        "nazwabiegu": "Półmaraton Kraków",
        "czas": "01:47:47",
        "tempo": "00:05:06"
    },
    {
        "rok": 2017,
        "data": "2017/11/11",
        "kto": "Trybul",
        "dystans": 10,
        "nazwabiegu": "Bieg Niepodległości",
        "czas": "00:49:16",
        "tempo": "00:04:56"
    },
    {
        "rok": 2017,
        "data": "2017/11/25",
        "kto": "Trybul",
        "dystans": 10,
        "nazwabiegu": "Bieg Olszynki Grochowskiej",
        "czas": "00:51:15",
        "tempo": "00:05:08"
    },
    {
        "rok": 2014,
        "data": "2014/01/04",
        "kto": "Śpiex",
        "dystans": 8,
        "nazwabiegu": "Bieg Noworoczny",
        "czas": "00:38:52",
        "tempo": "00:04:52"
    },
    {
        "rok": 2014,
        "data": "2014/04/23",
        "kto": "Śpiex",
        "dystans": 5,
        "nazwabiegu": "GP Żoliborza 5k",
        "czas": "00:22:15",
        "tempo": "00:04:27"
    },
    {
        "rok": 2014,
        "data": "2014/05/14",
        "kto": "Śpiex",
        "dystans": 10,
        "nazwabiegu": "GP Żoliborza 10k",
        "czas": "00:49:41",
        "tempo": "00:04:58"
    },
    {
        "rok": 2014,
        "data": "2014/05/17",
        "kto": "Śpiex",
        "dystans": 5,
        "nazwabiegu": "Biegiem na Staż",
        "czas": "00:21:48",
        "tempo": "00:04:22"
    },
    {
        "rok": 2014,
        "data": "2014/06/15",
        "kto": "Śpiex",
        "dystans": 5,
        "nazwabiegu": "Bieg Ursynowa",
        "czas": "00:21:56",
        "tempo": "00:04:23"
    },
    {
        "rok": 2014,
        "data": "2014/06/18",
        "kto": "Śpiex",
        "dystans": 15,
        "nazwabiegu": "GP Żoliborza 15k",
        "czas": "01:25:23",
        "tempo": "00:05:42"
    },
    {
        "rok": 2014,
        "data": "2014/07/12",
        "kto": "Śpiex",
        "dystans": 5,
        "nazwabiegu": "Bieg Morskie Oko",
        "czas": "00:22:30",
        "tempo": "00:04:30"
    },
    {
        "rok": 2014,
        "data": "2014/07/26",
        "kto": "Śpiex",
        "dystans": 10,
        "nazwabiegu": "Bieg Powstania Warszawskiego",
        "czas": "00:50:04",
        "tempo": "00:05:00"
    },
    {
        "rok": 2014,
        "data": "2014/08/23",
        "kto": "Śpiex",
        "dystans": 21.1,
        "nazwabiegu": "Półmaraton Chmielakowy",
        "czas": "01:53:15",
        "tempo": "00:05:22"
    },
    {
        "rok": 2014,
        "data": "2014/08/31",
        "kto": "Śpiex",
        "dystans": 21.1,
        "nazwabiegu": "Półmaraton Praski",
        "czas": "01:47:17",
        "tempo": "00:05:05"
    },
    {
        "rok": 2014,
        "data": "2014/09/07",
        "kto": "Śpiex",
        "dystans": 10,
        "nazwabiegu": "Bieg przez Most",
        "czas": "00:46:06",
        "tempo": "00:04:37"
    },
    {
        "rok": 2014,
        "data": "2014/09/14",
        "kto": "Śpiex",
        "dystans": 9,
        "nazwabiegu": "Skaryszewska 9",
        "czas": "00:42:00",
        "tempo": "00:04:40"
    },
    {
        "rok": 2014,
        "data": "2014/09/21",
        "kto": "Śpiex",
        "dystans": 10,
        "nazwabiegu": "Bieg Czterech Generałów",
        "czas": "00:46:38",
        "tempo": "00:04:40"
    },
    {
        "rok": 2014,
        "data": "2014/09/21",
        "kto": "Śpiex",
        "dystans": 5,
        "nazwabiegu": "Bemowski Bieg Przyjaźni",
        "czas": "00:22:12",
        "tempo": "00:04:26"
    },
    {
        "rok": 2014,
        "data": "2014/09/27",
        "kto": "Śpiex",
        "dystans": 10,
        "nazwabiegu": "Bieg Wegański",
        "czas": "00:47:01",
        "tempo": "00:04:42"
    },
    {
        "rok": 2014,
        "data": "2014/09/28",
        "kto": "Śpiex",
        "dystans": 5,
        "nazwabiegu": "Bieg na Piątkę",
        "czas": "00:21:26",
        "tempo": "00:04:17"
    },
    {
        "rok": 2014,
        "data": "2014/10/18",
        "kto": "Śpiex",
        "dystans": 21.1,
        "nazwabiegu": "Półmaraton Kampinoski",
        "czas": "01:55:43",
        "tempo": "00:05:29"
    },
    {
        "rok": 2014,
        "data": "2014/11/11",
        "kto": "Śpiex",
        "dystans": 10,
        "nazwabiegu": "Bieg Niepodległości",
        "czas": "00:49:57",
        "tempo": "00:05:00"
    },
    {
        "rok": 2014,
        "data": "2014/11/22",
        "kto": "Śpiex",
        "dystans": 10,
        "nazwabiegu": "Bieg Entre",
        "czas": "00:50:35",
        "tempo": "00:05:04"
    },
    {
        "rok": 2015,
        "data": "2015/01/18",
        "kto": "Śpiex",
        "dystans": 15,
        "nazwabiegu": "Bieg Chomiczówki",
        "czas": "01:18:47",
        "tempo": "00:05:15"
    },
    {
        "rok": 2015,
        "data": "2015/06/13",
        "kto": "Śpiex",
        "dystans": 5,
        "nazwabiegu": "Bieg Ursynowa",
        "czas": "00:23:53",
        "tempo": "00:04:47"
    },
    {
        "rok": 2015,
        "data": "2015/10/11",
        "kto": "Śpiex",
        "dystans": 5,
        "nazwabiegu": "Bemowski Bieg Przyjaźni",
        "czas": "00:24:55",
        "tempo": "00:04:59"
    },
    {
        "rok": 2015,
        "data": "2015/11/11",
        "kto": "Śpiex",
        "dystans": 10,
        "nazwabiegu": "Bieg Niepodległości",
        "czas": "00:55:39",
        "tempo": "00:05:34"
    },
    {
        "rok": 2016,
        "data": "2016/01/17",
        "kto": "Śpiex",
        "dystans": 15,
        "nazwabiegu": "Bieg Chomiczówki",
        "czas": "01:19:59",
        "tempo": "00:05:20"
    },
    {
        "rok": 2016,
        "data": "2016/04/03",
        "kto": "Śpiex",
        "dystans": 21.1,
        "nazwabiegu": "Półmaraton Warszawski",
        "czas": "01:56:16",
        "tempo": "00:05:31"
    },
    {
        "rok": 2016,
        "data": "2016/04/24",
        "kto": "Śpiex",
        "dystans": 42.2,
        "nazwabiegu": "Orlen Warsaw Marathon",
        "czas": "04:29:50",
        "tempo": "00:06:24"
    },
    {
        "rok": 2016,
        "data": "2016/05/03",
        "kto": "Śpiex",
        "dystans": 5,
        "nazwabiegu": "Bieg Konstytucji",
        "czas": "00:22:52",
        "tempo": "00:04:34"
    },
    {
        "rok": 2016,
        "data": "2016/05/07",
        "kto": "Śpiex",
        "dystans": 15.2,
        "nazwabiegu": "Bieg Łosia",
        "czas": "01:23:17",
        "tempo": "00:05:29"
    },
    {
        "rok": 2016,
        "data": "2016/06/11",
        "kto": "Śpiex",
        "dystans": 5,
        "nazwabiegu": "Bieg Ursynowa",
        "czas": "00:22:45",
        "tempo": "00:04:33"
    },
    {
        "rok": 2016,
        "data": "2016/07/23",
        "kto": "Śpiex",
        "dystans": 10,
        "nazwabiegu": "Bieg Powstania Warszawskiego",
        "czas": "00:49:56",
        "tempo": "00:05:00"
    },
    {
        "rok": 2016,
        "data": "2016/08/15",
        "kto": "Śpiex",
        "dystans": 21.1,
        "nazwabiegu": "Cud nad Wisłą",
        "czas": "01:44:38",
        "tempo": "00:04:58"
    },
    {
        "rok": 2016,
        "data": "2016/08/20",
        "kto": "Śpiex",
        "dystans": 21.1,
        "nazwabiegu": "Półmaraton Chmielakowy",
        "czas": "01:50:25",
        "tempo": "00:05:14"
    },
    {
        "rok": 2016,
        "data": "2016/08/28",
        "kto": "Śpiex",
        "dystans": 21.1,
        "nazwabiegu": "Półmaraton Praski",
        "czas": "01:54:32",
        "tempo": "00:05:26"
    },
    {
        "rok": 2016,
        "data": "2016/09/04",
        "kto": "Śpiex",
        "dystans": 10,
        "nazwabiegu": "Bieg przez Most",
        "czas": "00:49:23",
        "tempo": "00:04:56"
    },
    {
        "rok": 2016,
        "data": "2016/09/18",
        "kto": "Śpiex",
        "dystans": 10,
        "nazwabiegu": "Bieg Czterech Generałów",
        "czas": "00:48:27",
        "tempo": "00:04:51"
    },
    {
        "rok": 2016,
        "data": "2016/09/25",
        "kto": "Śpiex",
        "dystans": 42.2,
        "nazwabiegu": "Maraton Warszawski",
        "czas": "03:57:50",
        "tempo": "00:05:38",
        "pb": true,
    },
    {
        "rok": 2016,
        "data": "2016/10/29",
        "kto": "Śpiex",
        "dystans": 5.4,
        "nazwabiegu": "Bieg Zombie",
        "czas": "00:28:41",
        "tempo": "00:05:19"
    },
    {
        "rok": 2016,
        "data": "2016/11/11",
        "kto": "Śpiex",
        "dystans": 10,
        "nazwabiegu": "Bieg Niepodległości",
        "czas": "00:45:49",
        "tempo": "00:04:35",
        "pb": true,
    },
    {
        "rok": 2016,
        "data": "2016/12/03",
        "kto": "Śpiex",
        "dystans": 10,
        "nazwabiegu": "Bieg Mikołajkowy",
        "czas": "00:50:07",
        "tempo": "00:05:01"
    },
    {
        "rok": 2017,
        "data": "2017/01/15",
        "kto": "Śpiex",
        "dystans": 5,
        "nazwabiegu": "Bieg o Puchar Bielan",
        "czas": "00:23:49",
        "tempo": "00:04:46"
    },
    {
        "rok": 2017,
        "data": "2017/01/15",
        "kto": "Śpiex",
        "dystans": 15,
        "nazwabiegu": "Bieg Chomiczówki",
        "czas": "01:17:17",
        "tempo": "00:05:09"
    },
    {
        "rok": 2017,
        "data": "2017/02/18",
        "kto": "Śpiex",
        "dystans": 9.25,
        "nazwabiegu": "Bieg Wedla",
        "czas": "00:47:43",
        "tempo": "00:05:10"
    },
    {
        "rok": 2017,
        "data": "2017/03/05",
        "kto": "Śpiex",
        "dystans": 21.1,
        "nazwabiegu": "Półmaraton Wiązowski",
        "czas": "01:51:57",
        "tempo": "00:05:18"
    },
    {
        "rok": 2017,
        "data": "2017/03/26",
        "kto": "Śpiex",
        "dystans": 21.1,
        "nazwabiegu": "Półmaraton Warszawski",
        "czas": "01:47:22",
        "tempo": "00:05:05"
    },
    {
        "rok": 2017,
        "data": "2017/04/09",
        "kto": "Śpiex",
        "dystans": 5,
        "nazwabiegu": "Bieg SGH",
        "czas": "00:20:45",
        "tempo": "00:04:09"
    },
    {
        "rok": 2017,
        "data": "2017/04/23",
        "kto": "Śpiex",
        "dystans": 10,
        "nazwabiegu": "Bieg Oshee",
        "czas": "00:47:02",
        "tempo": "00:04:42"
    },
    {
        "rok": 2017,
        "data": "2017/05/03",
        "kto": "Śpiex",
        "dystans": 5,
        "nazwabiegu": "Bieg Konstytucji",
        "czas": "00:22:09",
        "tempo": "00:04:26"
    },
    {
        "rok": 2017,
        "data": "2017/05/13",
        "kto": "Śpiex",
        "dystans": 17.4,
        "nazwabiegu": "Bieg Łosia",
        "czas": "01:33:15",
        "tempo": "00:05:22"
    },
    {
        "rok": 2017,
        "data": "2017/05/14",
        "kto": "Śpiex",
        "dystans": 5,
        "nazwabiegu": "Ekiden 5k",
        "czas": "00:22:23",
        "tempo": "00:04:29"
    },
    {
        "rok": 2017,
        "data": "2017/05/28",
        "kto": "Śpiex",
        "dystans": 15,
        "nazwabiegu": "Mazowiecka Piętnastka",
        "czas": "01:12:54",
        "tempo": "00:04:52"
    },
    {
        "rok": 2017,
        "data": "2017/06/03",
        "kto": "Śpiex",
        "dystans": 5,
        "nazwabiegu": "Bieg Ursynowa",
        "czas": "00:20:37",
        "tempo": "00:04:07",
        "pb": true,
    },
    {
        "rok": 2017,
        "data": "2017/06/10",
        "kto": "Śpiex",
        "dystans": 4.2,
        "nazwabiegu": "Bieg Firmowy",
        "czas": "00:19:31",
        "tempo": "00:04:38"
    },
    {
        "rok": 2017,
        "data": "2017/06/11",
        "kto": "Śpiex",
        "dystans": 15,
        "nazwabiegu": "Biała Biega",
        "czas": "01:10:53",
        "tempo": "00:04:44",
        "pb": true,
    },
    {
        "rok": 2017,
        "data": "2017/06/17",
        "kto": "Śpiex",
        "dystans": 21.1,
        "nazwabiegu": "Półmaraton Wrocławski",
        "czas": "01:39:17",
        "tempo": "00:04:42",
        "pb": true,
    },
    {
        "rok": 2017,
        "data": "2017/06/25",
        "kto": "Śpiex",
        "dystans": 10,
        "nazwabiegu": "Bieg Platerów",
        "czas": "00:47:37",
        "tempo": "00:04:46"
    },
    {
        "rok": 2017,
        "data": "2017/08/15",
        "kto": "Śpiex",
        "dystans": 21.1,
        "nazwabiegu": "Cud nad Wisłą",
        "czas": "01:54:15",
        "tempo": "00:05:25"
    },
    {
        "rok": 2017,
        "data": "2017/08/19",
        "kto": "Śpiex",
        "dystans": 21.1,
        "nazwabiegu": "Półmaraton Chmielakowy",
        "czas": "02:03:00",
        "tempo": "00:05:50"
    },
    {
        "rok": 2017,
        "data": "2017/09/03",
        "kto": "Śpiex",
        "dystans": 21.1,
        "nazwabiegu": "Półmaraton w Pile",
        "czas": "01:49:39",
        "tempo": "00:05:07"
    },
    {
        "rok": 2017,
        "data": "2017/09/17",
        "kto": "Śpiex",
        "dystans": 21.1,
        "nazwabiegu": "Bieg Lechitów Gniezno",
        "czas": "01:53:42",
        "tempo": "00:05:23"
    },
    {
        "rok": 2017,
        "data": "2017/09/24",
        "kto": "Śpiex",
        "dystans": 5,
        "nazwabiegu": "Bieg na Piątkę",
        "czas": "00:22:46",
        "tempo": "00:04:33"
    },
    {
        "rok": 2017,
        "data": "2017/10/15",
        "kto": "Śpiex",
        "dystans": 21.1,
        "nazwabiegu": "Półmaraton Kraków",
        "czas": "01:57:43",
        "tempo": "00:05:35"
    },
    {
        "rok": 2017,
        "data": "2017/11/11",
        "kto": "Śpiex",
        "dystans": 10,
        "nazwabiegu": "Bieg Niepodległości",
        "czas": "00:49:54",
        "tempo": "00:04:59"
    },
    {
        "rok": 2012,
        "data": "2012/10/07",
        "kto": "Mareczek",
        "dystans": 10,
        "nazwabiegu": "Biegnij Warszawo",
        "czas": "00:46:32",
        "tempo": "00:04:39",
        "pb": true,
    },
    {
        "rok": 2012,
        "data": "2012/10/28",
        "kto": "Mareczek",
        "dystans": 5,
        "nazwabiegu": "Kręta Piątka",
        "czas": "00:24:14",
        "tempo": "00:04:51",
    },
    {
        "rok": 2012,
        "data": "2012/12/02",
        "kto": "Mareczek",
        "dystans": 10,
        "nazwabiegu": "Żoliborski Bieg Mikołajkowy",
        "czas": "00:51:18",
        "tempo": "00:05:08",
    },
    {
        "rok": 2013,
        "data": "2013/01/06",
        "kto": "Mareczek",
        "dystans": 8,
        "nazwabiegu": "Bieg Noworoczny",
        "czas": "00:40:05",
        "tempo": "00:05:01",
    },
    {
        "rok": 2013,
        "data": "2013/01/20",
        "kto": "Mareczek",
        "dystans": 5,
        "nazwabiegu": "Bieg o Puchar Bielan",
        "czas": "00:24:15",
        "tempo": "00:04:51",
    },
    {
        "rok": 2013,
        "data": "2013/10/20",
        "kto": "Mareczek",
        "dystans": 5,
        "nazwabiegu": "Bieg Przegonić Raka",
        "czas": "00:29:40",
        "tempo": "00:05:56",
    },
    {
        "rok": 2013,
        "data": "2013/11/11",
        "kto": "Mareczek",
        "dystans": 10,
        "nazwabiegu": "Bieg Niepodległości",
        "czas": "00:50:53",
        "tempo": "00:05:05",
    },
    {
        "rok": 2014,
        "data": "2014/01/04",
        "kto": "Mareczek",
        "dystans": 8,
        "nazwabiegu": "Bieg Noworoczny",
        "czas": "00:37:46",
        "tempo": "00:04:43"
    },
    {
        "rok": 2014,
        "data": "2014/01/19",
        "kto": "Mareczek",
        "dystans": 15,
        "nazwabiegu": "Bieg Chomiczówki",
        "czas": "01:20:04",
        "tempo": "00:05:20"
    },
    {
        "rok": 2014,
        "data": "2014/03/30",
        "kto": "Mareczek",
        "dystans": 21.1,
        "nazwabiegu": "Półmaraton Warszawski",
        "czas": "01:49:53",
        "tempo": "00:05:12",
        "pb": true,
    },
    {
        "rok": 2014,
        "data": "2014/05/14",
        "kto": "Mareczek",
        "dystans": 10,
        "nazwabiegu": "GP Żoliborza 10k",
        "czas": "00:53:43",
        "tempo": "00:05:22"
    },
    {
        "rok": 2014,
        "data": "2014/05/17",
        "kto": "Mareczek",
        "dystans": 5,
        "nazwabiegu": "Biegiem na Staż",
        "czas": "00:22:34",
        "tempo": "00:04:30",
        "pb": true,
    },
    {
        "rok": 2014,
        "data": "2014/06/15",
        "kto": "Mareczek",
        "dystans": 5,
        "nazwabiegu": "Bieg Ursynowa",
        "czas": "00:22:43",
        "tempo": "00:04:32"
    },
    {
        "rok": 2014,
        "data": "2014/06/18",
        "kto": "Mareczek",
        "dystans": 15,
        "nazwabiegu": "GP Żoliborza 15k",
        "czas": "01:17:09",
        "tempo": "00:05:08"
    },
    {
        "rok": 2014,
        "data": "2014/07/12",
        "kto": "Mareczek",
        "dystans": 5,
        "nazwabiegu": "Bieg Morskie Oko",
        "czas": "00:22:55",
        "tempo": "00:04:35"
    },
    {
        "rok": 2014,
        "data": "2014/07/26",
        "kto": "Mareczek",
        "dystans": 10,
        "nazwabiegu": "Bieg Powstania Warszawskiego",
        "czas": "00:50:51",
        "tempo": "00:05:05"
    },
    {
        "rok": 2014,
        "data": "2014/08/23",
        "kto": "Mareczek",
        "dystans": 21.1,
        "nazwabiegu": "Półmaraton Chmielakowy",
        "czas": "01:54:24",
        "tempo": "00:05:25"
    },
    {
        "rok": 2014,
        "data": "2014/08/31",
        "kto": "Mareczek",
        "dystans": 21.1,
        "nazwabiegu": "Półmaraton Praski",
        "czas": "01:55:27",
        "tempo": "00:05:28"
    },
    {
        "rok": 2014,
        "data": "2014/09/07",
        "kto": "Mareczek",
        "dystans": 10,
        "nazwabiegu": "Bieg przez Most",
        "czas": "00:49:43",
        "tempo": "00:04:58"
    },
    {
        "rok": 2014,
        "data": "2014/09/27",
        "kto": "Mareczek",
        "dystans": 10,
        "nazwabiegu": "Bieg Wegański",
        "czas": "00:53:55",
        "tempo": "00:05:23"
    },
    {
        "rok": 2014,
        "data": "2014/11/11",
        "kto": "Mareczek",
        "dystans": 10,
        "nazwabiegu": "Bieg Niepodległości",
        "czas": "00:48:51",
        "tempo": "00:04:53"
    },
    {
        "rok": 2014,
        "data": "2014/11/22",
        "kto": "Mareczek",
        "dystans": 10,
        "nazwabiegu": "Bieg Entre",
        "czas": "00:48:11",
        "tempo": "00:04:49"
    },
    {
        "rok": 2014,
        "data": "2014/12/07",
        "kto": "Mareczek",
        "dystans": 10,
        "nazwabiegu": "Bieg Mikołajów",
        "czas": "00:48:00",
        "tempo": "00:04:48",
    },
    {
        "rok": 2015,
        "data": "2015/01/18",
        "kto": "Mareczek",
        "dystans": 15,
        "nazwabiegu": "Bieg Chomiczówki",
        "czas": "01:16:34",
        "tempo": "00:05:06",
        "pb": true,
    },
    {
        "rok": 2015,
        "data": "2015/07/25",
        "kto": "Mareczek",
        "dystans": 5,
        "nazwabiegu": "Bieg Powstania Warszawskiego 5k",
        "czas": "00:27:40",
        "tempo": "00:05:32"
    },
    {
        "rok": 2015,
        "data": "2015/08/22",
        "kto": "Mareczek",
        "dystans": 21.1,
        "nazwabiegu": "Półmaraton Chmielakowy",
        "czas": "02:06:21",
        "tempo": "00:05:59"
    },
    {
        "rok": 2015,
        "data": "2015/11/11",
        "kto": "Mareczek",
        "dystans": 10,
        "nazwabiegu": "Bieg Niepodległości",
        "czas": "00:49:47",
        "tempo": "00:04:58"
    },
    {
        "rok": 2016,
        "data": "2016/01/17",
        "kto": "Mareczek",
        "dystans": 15,
        "nazwabiegu": "Bieg Chomiczówki",
        "czas": "01:18:09",
        "tempo": "00:05:12"
    },
    {
        "rok": 2016,
        "data": "2016/04/03",
        "kto": "Mareczek",
        "dystans": 21.1,
        "nazwabiegu": "Półmaraton Warszawski",
        "czas": "02:03:50",
        "tempo": "00:05:52"
    },
    {
        "rok": 2016,
        "data": "2016/04/24",
        "kto": "Mareczek",
        "dystans": 42.2,
        "nazwabiegu": "Orlen Warsaw Marathon",
        "czas": "05:03:59",
        "tempo": "00:07:12",
        "pb": true,
    },
    {
        "rok": 2016,
        "data": "2016/08/20",
        "kto": "Mareczek",
        "dystans": 21.1,
        "nazwabiegu": "Półmaraton Chmielakowy",
        "czas": "02:14:40",
        "tempo": "00:06:22"
    },
    {
        "rok": 2016,
        "data": "2016/08/28",
        "kto": "Mareczek",
        "dystans": 5,
        "nazwabiegu": "Praska Piątka",
        "czas": "00:29:21",
        "tempo": "00:05:52"
    },
    {
        "rok": 2016,
        "data": "2016/09/04",
        "kto": "Mareczek",
        "dystans": 10,
        "nazwabiegu": "Bieg przez Most",
        "czas": "00:53:54",
        "tempo": "00:05:23"
    },
    {
        "rok": 2016,
        "data": "2016/09/18",
        "kto": "Mareczek",
        "dystans": 10,
        "nazwabiegu": "Bieg Czterech Generałów",
        "czas": "00:49:47",
        "tempo": "00:04:58"
    },
    {
        "rok": 2016,
        "data": "2016/09/25",
        "kto": "Mareczek",
        "dystans": 5,
        "nazwabiegu": "Bieg na Piątkę",
        "czas": "00:27:40",
        "tempo": "00:05:32"
    },
    {
        "rok": 2016,
        "data": "2016/11/11",
        "kto": "Mareczek",
        "dystans": 10,
        "nazwabiegu": "Bieg Niepodległości",
        "czas": "00:48:12",
        "tempo": "00:04:49"
    },
    {
        "rok": 2016,
        "data": "2016/12/03",
        "kto": "Mareczek",
        "dystans": 10,
        "nazwabiegu": "Bieg Mikołajkowy",
        "czas": "00:52:30",
        "tempo": "00:05:15"
    },
    {
        "rok": 2017,
        "data": "2017/02/18",
        "kto": "Mareczek",
        "dystans": 9.25,
        "nazwabiegu": "Bieg Wedla",
        "czas": "00:45:49",
        "tempo": "00:04:57"
    },
    {
        "rok": 2017,
        "data": "2017/03/26",
        "kto": "Mareczek",
        "dystans": 21.1,
        "nazwabiegu": "Półmaraton Warszawski",
        "czas": "01:52:47",
        "tempo": "00:05:20"
    },
    {
        "rok": 2017,
        "data": "2017/05/03",
        "kto": "Mareczek",
        "dystans": 5,
        "nazwabiegu": "Bieg Konstytucji",
        "czas": "00:24:35",
        "tempo": "00:04:55"
    },
    {
        "rok": 2017,
        "data": "2017/05/07",
        "kto": "Mareczek",
        "dystans": 10,
        "nazwabiegu": "Bieg Wegański",
        "czas": "00:56:27",
        "tempo": "00:05:38"
    },
    {
        "rok": 2017,
        "data": "2017/05/13",
        "kto": "Mareczek",
        "dystans": 17.4,
        "nazwabiegu": "Bieg Łosia",
        "czas": "01:42:05",
        "tempo": "00:05:52"
    },
    {
        "rok": 2017,
        "data": "2017/05/14",
        "kto": "Mareczek",
        "dystans": 10,
        "nazwabiegu": "Ekiden 10k",
        "czas": "00:52:57",
        "tempo": "00:05:17"
    },
    {
        "rok": 2017,
        "data": "2017/05/28",
        "kto": "Mareczek",
        "dystans": 15,
        "nazwabiegu": "Mazowiecka Piętnastka",
        "czas": "01:22:21",
        "tempo": "00:05:29"
    },
    {
        "rok": 2017,
        "data": "2017/06/03",
        "kto": "Mareczek",
        "dystans": 5,
        "nazwabiegu": "Bieg Ursynowa",
        "czas": "00:23:08",
        "tempo": "00:04:37"
    },
    {
        "rok": 2017,
        "data": "2017/06/17",
        "kto": "Mareczek",
        "dystans": 21.1,
        "nazwabiegu": "Półmaraton Wrocławski",
        "czas": "01:52:48",
        "tempo": "00:05:20"
    },
    {
        "rok": 2017,
        "data": "2017/07/29",
        "kto": "Mareczek",
        "dystans": 10,
        "nazwabiegu": "Bieg Powstania Warszawskiego",
        "czas": "00:56:12",
        "tempo": "00:05:37"
    },
    {
        "rok": 2017,
        "data": "2017/08/15",
        "kto": "Mareczek",
        "dystans": 21.1,
        "nazwabiegu": "Cud nad Wisłą",
        "czas": "01:57:37",
        "tempo": "00:05:35"
    },
    {
        "rok": 2017,
        "data": "2017/08/19",
        "kto": "Mareczek",
        "dystans": 21.1,
        "nazwabiegu": "Półmaraton Chmielakowy",
        "czas": "02:01:58",
        "tempo": "00:05:47"
    },
    {
        "rok": 2017,
        "data": "2017/09/03",
        "kto": "Mareczek",
        "dystans": 21.1,
        "nazwabiegu": "Półmaraton w Pile",
        "czas": "01:52:16",
        "tempo": "00:05:15"
    },
    {
        "rok": 2017,
        "data": "2017/09/17",
        "kto": "Mareczek",
        "dystans": 21.1,
        "nazwabiegu": "Bieg Lechitów Gniezno",
        "czas": "01:56:02",
        "tempo": "00:05:30"
    },
    {
        "rok": 2017,
        "data": "2017/10/15",
        "kto": "Mareczek",
        "dystans": 21.1,
        "nazwabiegu": "Półmaraton Kraków",
        "czas": "01:58:17",
        "tempo": "00:05:36"
    },
    {
        "rok": 2018,
        "data": "2018/01/21",
        "kto": "Mareczek",
        "dystans": 15,
        "nazwabiegu": "Bieg Chomiczówki",
        "czas": "01:20:24",
        "tempo": "00:05:22"
    },
    {
        "rok": 2018,
        "data": "2018/01/21",
        "kto": "Trybul",
        "dystans": 15,
        "nazwabiegu": "Bieg Chomiczówki",
        "czas": "01:15:18",
        "tempo": "00:05:01"
    }
];
