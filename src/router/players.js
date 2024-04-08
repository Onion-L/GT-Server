const players = [
  {
    stats: { age: "37", appearance: 3, clean: 2 },
    _id: new ObjectId("660c944bb366aabeabeb0b0d"),
    id: 0,
    name: "Tom Heaton",
    number: "22",
    position: "Goalkeeper",
    nationality: "English",
    image:
      "https://assets.manutd.com/AssetPicker/images/0/0/18/231/1238856/PlayerProfile_Thumbnail_Mens_Heaton1691779866170.jpg",
    detail_image:
      "https://assets.manutd.com/AssetPicker/images/0/0/18/253/1244668/22-Tom-Heaton1693930126989.png",
    salary_num: 62000,
    __v: 0,
  },
  {
    stats: { age: "27", appearance: 35, clean: 10 },
    _id: new ObjectId("660c944bb366aabeabeb0b0e"),
    id: 1,
    name: "André Onana",
    number: "24",
    position: "Goalkeeper",
    nationality: "Cameroonian",
    image:
      "https://assets.manutd.com/AssetPicker/images/0/0/18/202/1231556/AO_HERO_11690038614026.jpg",
    detail_image:
      "https://assets.manutd.com/AssetPicker/images/0/0/18/253/1244669/24-Andre-Onana1693833901146.png",
    salary_num: 148900,
    __v: 0,
  },
  {
    stats: { age: "25", appearance: 1, clean: 0 },
    _id: new ObjectId("660c944bb366aabeabeb0b0f"),
    id: 2,
    name: "Altay Bayindir",
    number: "1",
    position: "Goalkeeper",
    nationality: "Turkish",
    image:
      "https://assets.manutd.com/AssetPicker/images/0/0/18/249/1243553/AB_PlayerProfile_Thumbnail1693553427809.webp",
    detail_image:
      "https://assets.manutd.com/AssetPicker/images/0/0/18/253/1244642/1-Altay-Bayindir1693823097395.png",
    salary_num: 43000,
    __v: 0,
  },
  {
    stats: { age: "29", appearance: 253, goal: 4 },
    _id: new ObjectId("660c944bb366aabeabeb0b10"),
    id: 3,
    name: "Victor Lindelöf",
    number: "2",
    position: "Defender",
    nationality: "Swedish",
    image:
      "https://assets.manutd.com/AssetPicker/images/0/0/18/231/1238876/PlayerProfile_Thumbnail_Mens_Lindelof1691780003409.jpg",
    detail_image:
      "https://assets.manutd.com/AssetPicker/images/0/0/18/253/1244670/2-Victor-Lindelof1693930427240.png",
    salary_num: 148900,
    __v: 0,
  },
  {
    stats: { age: "30", appearance: 198, goal: 9 },
    _id: new ObjectId("660c944bb366aabeabeb0b11"),
    id: 4,
    name: "Harry Maguire",
    number: "5",
    position: "Defender",
    nationality: "English",
    image:
      "https://assets.manutd.com/AssetPicker/images/0/0/18/231/1238872/PlayerProfile_Thumbnail_Mens_Maguire1691779143826.jpg",
    detail_image:
      "https://assets.manutd.com/AssetPicker/images/0/0/18/254/1244672/5-Harry-Maguire1693928406271.png",
    salary_num: "235800",
    __v: 0,
  },
  {
    stats: { age: "26", appearance: 55, goal: 1 },
    _id: new ObjectId("660c944bb366aabeabeb0b12"),
    id: 5,
    name: "Lisandro Martínez",
    number: "6",
    position: "Defender",
    nationality: "Argentinian",
    image:
      "https://assets.manutd.com/AssetPicker/images/0/0/18/231/1238877/PlayerProfile_Thumbnail_Mens_Martinez1691779331299.jpg",
    detail_image:
      "https://assets.manutd.com/AssetPicker/images/0/0/18/254/1244673/6-Lisandro-Martinez1693928865394.png",
    salary_num: "148900",
    __v: 0,
  },
  {
    stats: { age: "24", appearance: 39, goal: 0 },
    _id: new ObjectId("660c944bb366aabeabeb0b13"),
    id: 6,
    name: "Tyrell Malacia",
    number: "12",
    position: "Defender",
    nationality: "Dutch",
    image:
      "https://assets.manutd.com/AssetPicker/images/0/0/18/231/1238873/PlayerProfile_Thumbnail_Mens_Malacia1691779934262.jpg",
    detail_image:
      "https://assets.manutd.com/AssetPicker/images/0/0/18/254/1244674/12-Tyrell-Malacia1693930366624.png",
    salary_num: "93100",
    __v: 0,
  },
  {
    stats: { age: "30", appearance: 87, goal: 2 },
    _id: new ObjectId("660c944bb366aabeabeb0b14"),
    id: 7,
    name: "Raphaël Varane",
    number: "19",
    position: "Defender",
    nationality: "French",
    image:
      "https://assets.manutd.com/AssetPicker/images/0/0/18/231/1238875/PlayerProfile_Thumbnail_Mens_Varane1691779563000.webp",
    detail_image:
      "https://assets.manutd.com/AssetPicker/images/0/0/16/247/1111870/Player_Profile_Thumbnail_Mens_2223_Kit_Varane1658219566190.jpg",
    salary_num: "421900",
    __v: 0,
  },
  {
    stats: { age: "24", appearance: 141, goal: 5 },
    _id: new ObjectId("660c944bb366aabeabeb0b15"),
    id: 8,
    name: "Diogo Dalot",
    number: "20",
    position: "Defender",
    nationality: "Portuguese",
    image:
      "https://assets.manutd.com/AssetPicker/images/0/0/18/231/1238871/PlayerProfile_Thumbnail_Mens_Dalot1691778754424.jpg",
    detail_image:
      "https://assets.manutd.com/AssetPicker/images/0/0/18/254/1244677/20-Diogo-Dalot1693928182033.png",
    salary_num: "105500",
    __v: 0,
  },
  {
    stats: { age: "28", appearance: 275, goal: 4 },
    _id: new ObjectId("660c944bb366aabeabeb0b16"),
    id: 9,
    name: "Luke Shaw",
    number: "23",
    position: "Defender",
    nationality: "English",
    image:
      "https://assets.manutd.com/AssetPicker/images/0/0/18/231/1238874/PlayerProfile_Thumbnail_Mens_Shaw1691779387783.jpg",
    detail_image:
      "https://assets.manutd.com/AssetPicker/images/0/0/18/254/1244678/23-Luke-Shaw1693928941901.png",
    salary_num: "186100",
    __v: 0,
  },
  {
    stats: { age: "26", appearance: 177, goal: 2 },
    _id: new ObjectId("660c944bb366aabeabeb0b17"),
    id: 10,
    name: "Aaron Wan-Bissaka",
    number: "29",
    position: "Defender",
    nationality: "English",
    image:
      "https://assets.manutd.com/AssetPicker/images/0/0/18/231/1238870/PlayerProfile_Thumbnail_Mens_AWB1691777971267.jpg",
    detail_image:
      "https://assets.manutd.com/AssetPicker/images/0/0/18/254/1244679/29-Aaron-WanBissaka1693833736862.png",
    salary_num: "111700",
    __v: 0,
  },
  {
    stats: { age: "36", appearance: 219, goal: 7 },
    _id: new ObjectId("660c944bb366aabeabeb0b18"),
    id: 11,
    name: "Jonny Evans",
    number: "35",
    position: "Defender",
    nationality: "Northern Irish",
    image:
      "https://assets.manutd.com/AssetPicker/images/0/0/18/231/1238867/PlayerProfile_Thumbnail_Evans1693928710358.jpg",
    detail_image:
      "https://assets.manutd.com/AssetPicker/images/0/0/18/254/1244681/35-Jonny-Evans1693928662956.png",
    salary_num: "50000",
    __v: 0,
  },
  {
    stats: { age: "19", appearance: 3, goal: 0 },
    _id: new ObjectId("660c944bb366aabeabeb0b19"),
    id: 12,
    name: "Willy Kambwala",
    number: "53",
    position: "Defender",
    nationality: "French",
    image:
      "https://assets.manutd.com/AssetPicker/images/0/0/19/161/1286490/Player-Profile-Willy-Kambala1704816845874.png",
    detail_image:
      "https://assets.manutd.com/AssetPicker/images/0/0/19/161/1286490/Player-Profile-Willy-Kambala1704816845874.png",
    salary_num: "28000",
    __v: 0,
  },
  {
    stats: { age: "29", appearance: 219, goal: 71 },
    _id: new ObjectId("660c944bb366aabeabeb0b1a"),
    id: 13,
    name: "Bruno Fernandes",
    number: "8",
    position: "Midfielder",
    nationality: "Portuguese",
    image:
      "https://assets.manutd.com/AssetPicker/images/0/0/18/231/1238845/PlayerProfile_Thumbnail_Mens_Bruno1691778502502.jpg",
    detail_image:
      "https://assets.manutd.com/AssetPicker/images/0/0/18/254/1244684/8-Bruno-Fernandes1693834113080.png",
    salary_num: "297900",
    __v: 0,
  },
  {
    stats: { age: "32", appearance: 64, goal: 3 },
    _id: new ObjectId("660c944bb366aabeabeb0b1b"),
    id: 14,
    name: "Christian Eriksen",
    number: "14",
    position: "Midfielder",
    nationality: "Danish",
    image:
      "https://assets.manutd.com/AssetPicker/images/0/0/18/231/1238852/PlayerProfile_Thumbnail_Mens_Erikson1691778631325.jpg",
    detail_image:
      "https://assets.manutd.com/AssetPicker/images/0/0/18/254/1244685/14-Christian-Eriksen1693834628517.png",
    salary_num: "186100",
    __v: 0,
  },
  {
    stats: { age: "32", appearance: 69, goal: 11 },
    _id: new ObjectId("660c944bb366aabeabeb0b1c"),
    id: 15,
    name: "Casemiro",
    number: "18",
    position: "Midfielder",
    nationality: "Brazilian",
    image:
      "https://assets.manutd.com/AssetPicker/images/0/0/18/231/1238846/PlayerProfile_Thumbnail_Mens_Casemiro1691778556912.jpg",
    detail_image:
      "https://assets.manutd.com/AssetPicker/images/0/0/18/254/1244687/18-Casemiro1693834163018.png",
    salary_num: "434300",
    __v: 0,
  },
  {
    stats: { age: "27", appearance: 239, goal: 27 },
    _id: new ObjectId("660c944bb366aabeabeb0b1d"),
    id: 16,
    name: "Scott McTominay",
    number: "39",
    position: "Midfielder",
    nationality: "Scottish",
    image:
      "https://assets.manutd.com/AssetPicker/images/0/0/18/231/1238849/PlayerProfile_Thumbnail_Mens_Scott1691779735430.jpg",
    detail_image:
      "https://assets.manutd.com/AssetPicker/images/0/0/18/254/1244691/39-Scott-McTominay1693929586809.png",
    salary_num: "78000",
    __v: 0,
  },
  {
    stats: { age: "18", appearance: 19, goal: 2 },
    _id: new ObjectId("660c944bb366aabeabeb0b1e"),
    id: 17,
    name: "Kobbie Mainoo",
    number: "37",
    position: "Midfielder",
    nationality: "English",
    image:
      "https://assets.manutd.com/AssetPicker/images/0/0/19/12/1248492/Kobbie_Mainoo_player_profile_grid1695033808899.png",
    detail_image:
      "https://assets.manutd.com/AssetPicker/images/0/0/19/12/1248496/Kobbie_Mainoo_player_profile1695033781753.png",
    salary_num: "28000",
    __v: 0,
  },
  {
    stats: { age: "25", appearance: 12, goal: 0 },
    _id: new ObjectId("660c944bb366aabeabeb0b1f"),
    id: 18,
    name: "Mason Mount",
    number: "7",
    position: "Midfielder",
    nationality: "English",
    image:
      "https://assets.manutd.com/AssetPicker/images/0/0/18/231/1238855/PlayerProfile_Thumbnail_Mens_Mount1691779507521.jpg",
    detail_image:
      "https://assets.manutd.com/AssetPicker/images/0/0/18/254/1244683/7-Mason-Mount1693929069932.png",
    salary_num: "310200",
    __v: 0,
  },
  {
    stats: { age: "27", appearance: 19, goal: 0 },
    _id: new ObjectId("660c944bb366aabeabeb0b20"),
    id: 19,
    name: "Sofyan Amrabat",
    number: "4",
    position: "Midfielder",
    nationality: "Moroccan",
    image:
      "https://assets.manutd.com/AssetPicker/images/0/0/19/0/1245438/MicrosoftTeams_image__2___1_1693931883193.webp",
    detail_image:
      "https://assets.manutd.com/AssetPicker/images/0/0/19/0/1245308/Sofyan_Amrabat_player_profile_2023_241693929165683.png",
    salary_num: "80700",
    __v: 0,
  },
  {
    stats: { age: "28", appearance: 317, goal: 90 },
    _id: new ObjectId("660c944bb366aabeabeb0b21"),
    id: 20,
    name: "Anthony Martial",
    number: "9",
    position: "Forward",
    nationality: "French",
    image:
      "https://assets.manutd.com/AssetPicker/images/0/0/18/231/1238860/PlayerProfile_Thumbnail_Mens_Martial1691778309795.jpg",
    detail_image:
      "https://assets.manutd.com/AssetPicker/images/0/0/18/254/1244693/9-Anthony-Martial1693833950679.png",
    salary_num: "310200",
    __v: 0,
  },
  {
    stats: { age: "26", appearance: 390, goal: 128 },
    _id: new ObjectId("660c944bb366aabeabeb0b22"),
    id: 21,
    name: "Marcus Rashford",
    number: "10",
    position: "Forward",
    nationality: "English",
    image:
      "https://assets.manutd.com/AssetPicker/images/0/0/18/231/1238864/PlayerProfile_Thumbnail_Mens_Rashford1691779448134.jpg",
    detail_image:
      "https://assets.manutd.com/AssetPicker/images/0/0/18/254/1244694/10-Marcus-Rashford1693929008791.png",
    salary_num: "372300",
    __v: 0,
  },
  {
    stats: { age: "24", appearance: 70, goal: 9 },
    _id: new ObjectId("660c944bb366aabeabeb0b23"),
    id: 22,
    name: "Antony",
    number: "21",
    position: "Forward",
    nationality: "Brazilian",
    image:
      "https://assets.manutd.com/AssetPicker/images/0/0/18/231/1238859/PlayerProfile_Thumbnail_Mens_Antony1691778373624.jpg",
    detail_image:
      "https://assets.manutd.com/AssetPicker/images/0/0/19/0/1245307/Antony_player_profile_2023_241693927972929.png",
    salary_num: "248200",
    __v: 0,
  },
  {
    stats: { age: "19", appearance: 70, goal: 12 },
    _id: new ObjectId("660c944bb366aabeabeb0b24"),
    id: 23,
    name: "Alejandro Garnacho",
    number: "17",
    position: "Forward",
    nationality: "Argentinian",
    image:
      "https://assets.manutd.com/AssetPicker/images/0/0/18/231/1238862/PlayerProfile_Thumbnail_Mens_Garnacho1691778056238.jpg",
    detail_image:
      "https://assets.manutd.com/AssetPicker/images/0/0/18/254/1244696/17-Alejandro-Garnacho1693833803729.png",
    salary_num: "100000",
    __v: 0,
  },
  {
    stats: { age: "21", appearance: 11, goal: 1 },
    _id: new ObjectId("660c944bb366aabeabeb0b25"),
    id: 24,
    name: "Amad Diallo",
    number: "16",
    position: "Forward",
    nationality: "Ivorian",
    image:
      "https://assets.manutd.com/AssetPicker/images/0/0/18/231/1238850/PlayerProfile_Thumbnail_Mens_Amad1691778186940.jpg",
    detail_image:
      "https://assets.manutd.com/AssetPicker/images/0/0/18/254/1244686/16-Amad1693833855322.png",
    salary_num: "28000",
    __v: 0,
  },
  {
    stats: { age: "20", appearance: 5, goal: 0 },
    _id: new ObjectId("660c944bb366aabeabeb0b26"),
    id: 25,
    name: "Shola Shoretire",
    number: "47",
    position: "Forward",
    nationality: "English",
    image:
      "https://assets.manutd.com/AssetPicker/images/0/0/18/231/1238865/PlayerProfile_Thumbnail_Mens_Shola1691780221567.jpg",
    detail_image:
      "https://assets.manutd.com/AssetPicker/images/0/0/18/254/1244699/47-Shola-Shoretire1693931358619.png",
    salary_num: "28000",
    __v: 0,
  },
  {
    stats: { age: "21", appearance: 30, goal: 13 },
    _id: new ObjectId("660c944bb366aabeabeb0b27"),
    id: 26,
    name: "Rasmus Højlund",
    number: "11",
    position: "Forward",
    nationality: "Danish",
    image:
      "https://assets.manutd.com/AssetPicker/images/0/0/18/231/1238863/PlayerProfile_Thumbnail_Mens_Hojlund1691779649782.jpg",
    detail_image:
      "https://assets.manutd.com/AssetPicker/images/0/0/18/254/1244695/11-Rasmus-Hojlund1693929412619.png",
    salary_num: "105500",
    __v: 0,
  },
];
module.exports = players;
