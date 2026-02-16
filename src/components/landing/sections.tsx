import { Badge } from "@/components/ui/badge"

export const sections = [
  {
    id: 'hero',
    subtitle: <Badge variant="outline" className="text-white border-white/40 bg-white/5 backdrop-blur-sm">Скачать бесплатно</Badge>,
    title: "Ваниль. Общение без лишнего.",
    showButton: true,
    buttonText: 'Попробовать'
  },
  {
    id: 'about',
    title: 'Простой и быстрый',
    content: 'Мгновенные сообщения, голосовые и видеозвонки, групповые чаты — всё работает легко и без задержек.'
  },
  {
    id: 'features',
    title: 'Всё что нужно',
    content: 'Стикеры, пересылка файлов, голосовые сообщения, тёмная тема и синхронизация между устройствами.'
  },
  {
    id: 'testimonials',
    title: 'Приватность прежде всего',
    content: 'Сквозное шифрование, никакой рекламы и полный контроль над вашими данными.'
  },
  {
    id: 'join',
    title: 'Начните общаться',
    content: 'Скачайте Ваниль и пригласите друзей. Чистое общение без лишнего шума — именно так, как должно быть.',
    showButton: true,
    buttonText: 'Скачать'
  },
]