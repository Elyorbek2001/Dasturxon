import { useState } from 'react'
import { useLang } from '../lib/LangContext'
import { RESTAURANT } from '../config'
import Icon from './Icon'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const TIMES = []
for (let h = 12; h <= 22; h++) {
  TIMES.push(`${String(h).padStart(2, '0')}:00`)
  if (h < 22) TIMES.push(`${String(h).padStart(2, '0')}:30`)
}

function today() {
  const d = new Date()
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset())
  return d.toISOString().slice(0, 10)
}

// Telegram botga yuborish. Token yo'q bo'lsa, demo rejim (konsolga yozadi).
async function sendToTelegram(data) {
  const token = import.meta.env.VITE_TELEGRAM_BOT_TOKEN
  const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID

  const text = [
    '🍽 New reservation',
    `👤 ${data.name}`,
    `📞 ${data.phone}`,
    `📅 ${data.date} at ${data.time}`,
    `👥 Guests: ${data.guests}`,
    `📝 ${data.note || '-'}`,
  ].join('\n')

  if (!token || !chatId) {
    await new Promise((r) => setTimeout(r, 800))
    console.info('[demo mode] Reservation:\n' + text)
    return
  }

  const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text }),
  })
  if (!res.ok) throw new Error('Telegram request failed')
}

const initial = () => ({
  name: '',
  phone: '',
  date: today(),
  time: '19:00',
  guests: 2,
  note: '',
})

const field =
  'w-full rounded-xl border border-cream/15 bg-ink px-4 py-3 text-cream placeholder:text-muted/70 outline-none transition-colors focus:border-gold'

export default function Reservation() {
  const { t, tr } = useLang()
  const [form, setForm] = useState(initial)
  const [status, setStatus] = useState('idle') // idle | sending | ok | error | invalid

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  async function onSubmit(e) {
    e.preventDefault()
    if (!form.name.trim() || form.phone.replace(/\D/g, '').length < 7) {
      setStatus('invalid')
      return
    }
    setStatus('sending')
    try {
      await sendToTelegram(form)
      setStatus('ok')
    } catch {
      setStatus('error')
    }
  }

  function reset() {
    setForm(initial())
    setStatus('idle')
  }

  return (
    <section id="reservation" className="bg-ink-soft py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-5 lg:gap-16">
        <div className="lg:col-span-2">
          <SectionHeading eyebrow={t('res_eyebrow')} title={t('res_title')} />
          <Reveal delay={100}>
            <p className="mt-8 leading-relaxed text-cream/75">{t('res_text')}</p>

            <dl className="mt-10 space-y-6">
              {[
                ['clock', 'res_info_t', RESTAURANT.hours],
                [
                  'phone',
                  'res_info_call',
                  <a key="p" href={`tel:${RESTAURANT.phone.replace(/\s/g, '')}`} className="hover:text-gold">
                    {RESTAURANT.phone}
                  </a>,
                ],
                ['pin', 'res_info_visit', tr(RESTAURANT.address)],
              ].map(([icon, label, value]) => (
                <div key={icon} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold">
                    <Icon name={icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <dt className="text-xs uppercase tracking-widest text-gold">{t(label)}</dt>
                    <dd className="mt-1 font-display text-xl">{value}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={150} className="lg:col-span-3">
          <div className="rounded-3xl border border-cream/10 bg-ink-card p-6 shadow-2xl shadow-black/40 sm:p-10">
            {status === 'ok' ? (
              <div className="py-10 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold/15 text-gold">
                  <Icon name="check" className="h-8 w-8" />
                </div>
                <h3 className="mt-6 font-display text-3xl font-semibold">{t('res_ok_t')}</h3>
                <p className="mx-auto mt-3 max-w-sm text-cream/75">{t('res_ok_d')}</p>
                <button
                  onClick={reset}
                  className="mt-8 rounded-full border border-cream/25 px-6 py-3 text-sm transition-colors hover:border-gold hover:text-gold"
                >
                  {t('res_again')}
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm text-muted">{t('res_name')}</span>
                  <input
                    className={field}
                    value={form.name}
                    onChange={set('name')}
                    placeholder={t('res_name_ph')}
                    autoComplete="name"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm text-muted">{t('res_phone')}</span>
                  <input
                    className={field}
                    value={form.phone}
                    onChange={set('phone')}
                    placeholder="+998 __ ___ __ __"
                    type="tel"
                    autoComplete="tel"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm text-muted">{t('res_date')}</span>
                  <input
                    className={field}
                    type="date"
                    min={today()}
                    value={form.date}
                    onChange={set('date')}
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm text-muted">{t('res_time')}</span>
                  <select className={field} value={form.time} onChange={set('time')}>
                    {TIMES.map((x) => (
                      <option key={x} value={x}>
                        {x}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-sm text-muted">{t('res_guests')}</span>
                  <select className={field} value={form.guests} onChange={set('guests')}>
                    {Array.from({ length: 9 }, (_, i) => i + 1).map((n) => (
                      <option key={n} value={n}>
                        {n} {t('res_guests_unit')}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-sm text-muted">{t('res_note')}</span>
                  <textarea
                    className={`${field} resize-none`}
                    rows={3}
                    value={form.note}
                    onChange={set('note')}
                    placeholder={t('res_note_ph')}
                  />
                </label>

                {(status === 'invalid' || status === 'error') && (
                  <p role="alert" className="text-sm text-red-400 sm:col-span-2">
                    {status === 'invalid' ? t('res_req') : t('res_err')}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="rounded-full bg-gold px-8 py-4 font-semibold text-ink transition-all hover:bg-gold-soft disabled:cursor-not-allowed disabled:opacity-60 sm:col-span-2"
                >
                  {status === 'sending' ? t('res_sending') : t('res_submit')}
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
