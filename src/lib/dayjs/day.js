import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import locale from './fr'

dayjs.locale(locale)
dayjs.extend(relativeTime)

export default dayjs
