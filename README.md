# Dasturxon - restoran sayti

React 19 + Vite + Tailwind CSS v4. Ikki tilli (UZ / EN), menyu, galereya, stol band qilish formasi (Telegramga yuboradi).

## Ishga tushirish

```bash
npm install
npm run dev
```

Build: `npm run build`

## Telegram sozlash

1. `.env.example` ni `.env` ga nusxalang
2. `VITE_TELEGRAM_BOT_TOKEN` va `VITE_TELEGRAM_CHAT_ID` ni to'ldiring
3. Server qayta ishga tushiring

Bo'sh qoldirsangiz forma demo rejimda ishlaydi (brauzer konsoliga yozadi).

Diqqat: token frontend kodida ko'rinadi. Haqiqiy mijoz loyihasida so'rovni kichik backend (yoki serverless funksiya) orqali yuboring.

## Moslashtirish

- `src/config.js`: nom, telefon, manzil, ish vaqti, rasmlar
- `src/data/menu.js`: menyu taomlari va narxlar
- `src/i18n.js`: barcha matnlar (UZ / EN) va mehmon fikrlari
- `src/index.css`: ranglar va shriftlar (`@theme` ichida)
