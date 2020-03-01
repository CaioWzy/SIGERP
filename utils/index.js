import moment from 'moment'

moment.locale('pt-BR')

export function humanizeDate(date) {
  return moment(date).format('LL')
}
