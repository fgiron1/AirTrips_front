import {
  startOfWeek,
  endOfWeek,
  addDays,
  startOfMonth,
  endOfMonth
} from 'date-fns'

export const CALENDAR_PREDEFINED_RANGES = [
  {
    label: 'Today',
    value: [new Date(), new Date()],
    appearance: 'default'
  },
  {
    label: 'This week',
    value: [startOfWeek(new Date()), endOfWeek(new Date())],
    appearance: 'default'
  },
  {
    label: 'This month',
    value: [startOfMonth(new Date()), endOfMonth(new Date())],
    appearance: 'default'
  },
  {
    label: 'Next week',
    closeOverlay: false,
    value: value => {
      const [start = new Date()] = value || []
      return [
        addDays(startOfWeek(start, { weekStartsOn: 0 }), 7),
        addDays(endOfWeek(start, { weekStartsOn: 0 }), 7)
      ]
    },
    appearance: 'default'
  }
]
