export const RESTAURANT = {
  name: 'Dasturxon',
  phone: '+998 90 123 45 67',
  email: 'hello@dasturxon.example',
  address: {
    en: '12 Amir Temur Avenue, Tashkent',
    uz: "Amir Temur ko'chasi 12, Toshkent",
  },
  hours: '12:00 – 23:00',
  currency: '$',
}

const u = (id, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

// Rasmlarni shu yerdan almashtiring (o'z rasmlaringiz yoki boshqa havola)
export const IMAGES = {
  hero: u('1414235077428-338989a2e8c0', 1920),
  about1: u('1517248135467-4c7edcad34c4', 900),
  about2: u('1555396273-367ea4eb4db5', 900),
  categories: {
    starters: u('1476224203421-9ac39bcb3327', 900),
    mains: u('1504674900247-0877df9cc836', 900),
    grill: u('1544025162-d76694265947', 900),
    desserts: u('1567620905732-2d1ec7ab7445', 900),
    drinks: u('1559339352-11d035aa65de', 900),
  },
  gallery: [
    u('1517248135467-4c7edcad34c4', 800),
    u('1544025162-d76694265947', 800),
    u('1555396273-367ea4eb4db5', 800),
    u('1504674900247-0877df9cc836', 800),
    u('1559339352-11d035aa65de', 800),
    u('1476224203421-9ac39bcb3327', 800),
  ],
}
