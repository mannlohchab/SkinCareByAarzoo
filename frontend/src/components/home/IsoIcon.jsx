import arrowBackward from '../../assets/nucleo/isometric/arrow-backward.svg?raw'
import arrowForward from '../../assets/nucleo/isometric/arrow-forward.svg?raw'
import award from '../../assets/nucleo/isometric/award.svg?raw'
import bag from '../../assets/nucleo/isometric/bag.svg?raw'
import calendar from '../../assets/nucleo/isometric/calendar.svg?raw'
import chart from '../../assets/nucleo/isometric/chart.svg?raw'
import chatHeart from '../../assets/nucleo/isometric/chat-heart.svg?raw'
import crown from '../../assets/nucleo/isometric/crown.svg?raw'
import faceSmile from '../../assets/nucleo/isometric/face-smile.svg?raw'
import heart from '../../assets/nucleo/isometric/heart.svg?raw'
import home from '../../assets/nucleo/isometric/home.svg?raw'
import photo from '../../assets/nucleo/isometric/photo.svg?raw'
import quote from '../../assets/nucleo/isometric/quote.svg?raw'
import shield from '../../assets/nucleo/isometric/shield.svg?raw'
import shop from '../../assets/nucleo/isometric/shop.svg?raw'
import star from '../../assets/nucleo/isometric/star.svg?raw'
import time from '../../assets/nucleo/isometric/time.svg?raw'
import user from '../../assets/nucleo/isometric/user.svg?raw'
import wand from '../../assets/nucleo/isometric/wand.svg?raw'

const icons = {
  'arrow-backward': arrowBackward,
  'arrow-forward': arrowForward,
  award,
  bag,
  calendar,
  chart,
  'chat-heart': chatHeart,
  crown,
  'face-smile': faceSmile,
  heart,
  home,
  photo,
  quote,
  shield,
  shop,
  star,
  time,
  user,
  wand,
}

export function IsoIcon({ name, className = '', size = 24 }) {
  const markup = icons[name]
  if (!markup) return null

  return (
    <span
      className={`nc-iso ${className}`.trim()}
      style={{ width: size, height: size }}
      dangerouslySetInnerHTML={{ __html: markup }}
      aria-hidden="true"
    />
  )
}
