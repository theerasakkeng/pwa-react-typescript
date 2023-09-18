const provinces = [
  { Seq: null, ProvinceId: 64, ProvinceEn: "Krabi", ProvinceTh: "กระบี่" },
  {
    Seq: null,
    ProvinceId: 1,
    ProvinceEn: "Bangkok",
    ProvinceTh: "กรุงเทพมหานคร",
  },
  {
    Seq: null,
    ProvinceId: 56,
    ProvinceEn: "Kanchanaburi",
    ProvinceTh: "กาญจนบุรี",
  },
  {
    Seq: null,
    ProvinceId: 34,
    ProvinceEn: "Kalasin",
    ProvinceTh: "กาฬสินธุ์",
  },
  {
    Seq: null,
    ProvinceId: 49,
    ProvinceEn: "Kamphaeng Phet",
    ProvinceTh: "กำแพงเพชร",
  },
  {
    Seq: null,
    ProvinceId: 28,
    ProvinceEn: "Khon Kaen",
    ProvinceTh: "ขอนแก่น",
  },
  {
    Seq: null,
    ProvinceId: 13,
    ProvinceEn: "Chanthaburi",
    ProvinceTh: "จันทบุรี",
  },
  {
    Seq: null,
    ProvinceId: 15,
    ProvinceEn: "Chachoengsao",
    ProvinceTh: "ฉะเชิงเทรา",
  },
  { Seq: null, ProvinceId: 11, ProvinceEn: "Chonburi", ProvinceTh: "ชลบุรี" },
  { Seq: null, ProvinceId: 9, ProvinceEn: "Chai Nat", ProvinceTh: "ชัยนาท" },
  {
    Seq: null,
    ProvinceId: 25,
    ProvinceEn: "Chaiyaphum",
    ProvinceTh: "ชัยภูมิ",
  },
  { Seq: null, ProvinceId: 69, ProvinceEn: "Chumphon", ProvinceTh: "ชุมพร" },
  {
    Seq: null,
    ProvinceId: 45,
    ProvinceEn: "Chiang Rai",
    ProvinceTh: "เชียงราย",
  },
  {
    Seq: null,
    ProvinceId: 38,
    ProvinceEn: "Chiang Mai",
    ProvinceTh: "เชียงใหม่",
  },
  { Seq: null, ProvinceId: 72, ProvinceEn: "Trang", ProvinceTh: "ตรัง" },
  { Seq: null, ProvinceId: 14, ProvinceEn: "Trat", ProvinceTh: "ตราด" },
  { Seq: null, ProvinceId: 50, ProvinceEn: "Tak", ProvinceTh: "ตาก" },
  {
    Seq: null,
    ProvinceId: 17,
    ProvinceEn: "Nakhon Nayok",
    ProvinceTh: "นครนายก",
  },
  {
    Seq: null,
    ProvinceId: 58,
    ProvinceEn: "Nakhon Pathom",
    ProvinceTh: "นครปฐม",
  },
  {
    Seq: null,
    ProvinceId: 36,
    ProvinceEn: "Nakhon Phanom",
    ProvinceTh: "นครพนม",
  },
  {
    Seq: null,
    ProvinceId: 19,
    ProvinceEn: "Nakhon Ratchasima",
    ProvinceTh: "นครราชสีมา",
  },
  {
    Seq: null,
    ProvinceId: 63,
    ProvinceEn: "Nakhon Si Thammarat",
    ProvinceTh: "นครศรีธรรมราช",
  },
  {
    Seq: null,
    ProvinceId: 47,
    ProvinceEn: "Nakhon Sawan",
    ProvinceTh: "นครสวรรค์",
  },
  {
    Seq: null,
    ProvinceId: 3,
    ProvinceEn: "Nonthaburi",
    ProvinceTh: "นนทบุรี",
  },
  {
    Seq: null,
    ProvinceId: 76,
    ProvinceEn: "Narathiwat",
    ProvinceTh: "นราธิวาส",
  },
  { Seq: null, 
    ProvinceId: 43, 
    ProvinceEn: "Nan",
    ProvinceTh: "น่าน" },
  {
    Seq: null,
    ProvinceId: 77,
    ProvinceEn: "Bueng Kan",
    ProvinceTh: "บึงกาฬ",
  },
  {
    Seq: null,
    ProvinceId: 20,
    ProvinceEn: "Buriram",
    ProvinceTh: "บุรีรัมย์",
  },
  {
    Seq: null,
    ProvinceId: 4,
    ProvinceEn: "Pathum Thani",
    ProvinceTh: "ปทุมธานี",
  },
  {
    Seq: null,
    ProvinceId: 62,
    ProvinceEn: "Prachuap Khiri Khan",
    ProvinceTh: "ประจวบคีรีขันธ์",
  },
  {
    Seq: null,
    ProvinceId: 16,
    ProvinceEn: "Prachinburi",
    ProvinceTh: "ปราจีนบุรี",
  },
  { Seq: null, ProvinceId: 74, ProvinceEn: "Pattani", ProvinceTh: "ปัตตานี" },
  {
    Seq: null,
    ProvinceId: 5,
    ProvinceEn: "Phra Nakhon Si Ayutthaya",
    ProvinceTh: "พระนครศรีอยุธยา",
  },
  { Seq: null, ProvinceId: 44, ProvinceEn: "Phayao", ProvinceTh: "พะเยา" },
  { Seq: null, ProvinceId: 65, ProvinceEn: "Phang Nga", ProvinceTh: "พังงา" },
  {
    Seq: null,
    ProvinceId: 73,
    ProvinceEn: "Phatthalung",
    ProvinceTh: "พัทลุง",
  },
  { Seq: null, ProvinceId: 53, ProvinceEn: "Phichit", ProvinceTh: "พิจิตร" },
  {
    Seq: null,
    ProvinceId: 52,
    ProvinceEn: "Phitsanulok",
    ProvinceTh: "พิษณุโลก",
  },
  {
    Seq: null,
    ProvinceId: 61,
    ProvinceEn: "Phetchaburi",
    ProvinceTh: "เพชรบุรี",
  },
  {
    Seq: null,
    ProvinceId: 54,
    ProvinceEn: "Phetchabun",
    ProvinceTh: "เพชรบูรณ์",
  },
  { Seq: null, ProvinceId: 42, ProvinceEn: "Phrae", ProvinceTh: "แพร่" },
  { Seq: null, ProvinceId: 66, ProvinceEn: "Phuket", ProvinceTh: "ภูเก็ต" },
  {
    Seq: null,
    ProvinceId: 32,
    ProvinceEn: "Maha Sarakham",
    ProvinceTh: "มหาสารคาม",
  },
  {
    Seq: null,
    ProvinceId: 37,
    ProvinceEn: "Mukdahan",
    ProvinceTh: "มุกดาหาร",
  },
  {
    Seq: null,
    ProvinceId: 46,
    ProvinceEn: "Mae Hong Son",
    ProvinceTh: "แม่ฮ่องสอน",
  },
  { Seq: null, ProvinceId: 24, ProvinceEn: "Yasothon", ProvinceTh: "ยโสธร" },
  { Seq: null, ProvinceId: 75, ProvinceEn: "Yala", ProvinceTh: "ยะลา" },
  { Seq: null, ProvinceId: 33, ProvinceEn: "Roi Et", ProvinceTh: "ร้อยเอ็ด" },
  { Seq: null, ProvinceId: 68, ProvinceEn: "Ranong", ProvinceTh: "ระนอง" },
  { Seq: null, ProvinceId: 12, ProvinceEn: "Rayong", ProvinceTh: "ระยอง" },
  {
    Seq: null,
    ProvinceId: 55,
    ProvinceEn: "Ratchaburi",
    ProvinceTh: "ราชบุรี",
  },
  { Seq: null, ProvinceId: 7, ProvinceEn: "Lopburi", ProvinceTh: "ลพบุรี" },
  { Seq: null, ProvinceId: 40, ProvinceEn: "Lampang", ProvinceTh: "ลำปาง" },
  { Seq: null, ProvinceId: 39, ProvinceEn: "Lamphun", ProvinceTh: "ลำพูน" },
  { Seq: null, ProvinceId: 30, ProvinceEn: "Loei", ProvinceTh: "เลย" },
  {
    Seq: null,
    ProvinceId: 22,
    ProvinceEn: "Sisaket",
    ProvinceTh: "ศรีสะเกษ",
  },
  {
    Seq: null,
    ProvinceId: 35,
    ProvinceEn: "Sakon Nakhon",
    ProvinceTh: "สกลนคร",
  },
  { Seq: null, ProvinceId: 70, ProvinceEn: "Songkhla", ProvinceTh: "สงขลา" },
  { Seq: null, ProvinceId: 71, ProvinceEn: "Satun", ProvinceTh: "สตูล" },
  {
    Seq: null,
    ProvinceId: 2,
    ProvinceEn: "Samut Prakan",
    ProvinceTh: "สมุทรปราการ",
  },
  {
    Seq: null,
    ProvinceId: 60,
    ProvinceEn: "Samut Songkhram",
    ProvinceTh: "สมุทรสงคราม",
  },
  {
    Seq: null,
    ProvinceId: 59,
    ProvinceEn: "Samut Sakhon",
    ProvinceTh: "สมุทรสาคร",
  },
  { Seq: null, ProvinceId: 18, ProvinceEn: "SaKaeo", ProvinceTh: "สระแก้ว" },
  {
    Seq: null,
    ProvinceId: 10,
    ProvinceEn: "Saraburi",
    ProvinceTh: "สระบุรี",
  },
  {
    Seq: null,
    ProvinceId: 8,
    ProvinceEn: "Sing Buri",
    ProvinceTh: "สิงห์บุรี",
  },
  {
    Seq: null,
    ProvinceId: 51,
    ProvinceEn: "Sukhothai",
    ProvinceTh: "สุโขทัย",
  },
  {
    Seq: null,
    ProvinceId: 57,
    ProvinceEn: "Suphan Buri",
    ProvinceTh: "สุพรรณบุรี",
  },
  {
    Seq: null,
    ProvinceId: 67,
    ProvinceEn: "Surat Thani",
    ProvinceTh: "สุราษฎร์ธานี",
  },
  { Seq: null, ProvinceId: 21, ProvinceEn: "Surin", ProvinceTh: "สุรินทร์" },
  {
    Seq: null,
    ProvinceId: 31,
    ProvinceEn: "Nong Khai",
    ProvinceTh: "หนองคาย",
  },
  {
    Seq: null,
    ProvinceId: 27,
    ProvinceEn: "Nong Bua Lamphu",
    ProvinceTh: "หนองบัวลำภู",
  },
  {
    Seq: null,
    ProvinceId: 6,
    ProvinceEn: "Ang Thong",
    ProvinceTh: "อ่างทอง",
  },
  {
    Seq: null,
    ProvinceId: 26,
    ProvinceEn: "Amnat Charoen",
    ProvinceTh: "อำนาจเจริญ",
  },
  {
    Seq: null,
    ProvinceId: 29,
    ProvinceEn: "Udon Thani",
    ProvinceTh: "อุดรธานี",
  },
  {
    Seq: null,
    ProvinceId: 41,
    ProvinceEn: "Uttaradit",
    ProvinceTh: "อุตรดิตถ์",
  },
  {
    Seq: null,
    ProvinceId: 48,
    ProvinceEn: "Uthai Thani",
    ProvinceTh: "อุทัยธานี",
  },
  {
    Seq: null,
    ProvinceId: 23,
    ProvinceEn: "Ubon Ratchathani",
    ProvinceTh: "อุบลราชธานี",
  },
]

export default provinces
