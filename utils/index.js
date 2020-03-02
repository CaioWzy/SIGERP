import moment from 'moment'

moment.locale('pt-BR')

export function humanizeDate(date) {
  return moment(date).format('LL')
}

export function stripNonNumeric(value) {
  console.log(value)
  return value.replace(/\D/g, '');
}

export function maskIt(value, pattern) {
  console.log(value)
  let i = 0,
    v = value.toString();
  return pattern.replace(/#/g, _ => v[i++]);
}
