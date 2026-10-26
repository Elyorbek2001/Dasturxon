import { useLang } from '../lib/LangContext'
import { IMAGES } from '../config'
import Img from './Img'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

// Mozaika uchun katak o'lchamlari
const SPANS = [
  'sm:col-span-2 sm:row-span-2',
  '',
  '',
  '',
  '',
  'sm:col-span-2',
]

export default function Gallery() {
  const { t } = useLang()

  return (
    <section id="gallery" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
      <SectionHeading eyebrow={t('gallery_eyebrow')} title={t('gallery_title')} center />

      <div className="mt-14 grid auto-rows-[200px] grid-cols-2 gap-3 sm:auto-rows-[220px] sm:grid-cols-4 sm:gap-4">
        {IMAGES.gallery.map((src, i) => (
          <Reveal key={src + i} delay={i * 70} className={`h-full ${SPANS[i] || ''}`}>
            <div className="group h-full overflow-hidden rounded-2xl">
              <Img
                src={src}
                alt={`Dasturxon ${i + 1}`}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
