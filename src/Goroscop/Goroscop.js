import './Goroscop.css';

const Goroscop = () => {
  const monthDate = [
    {month: 'Козеріг', date: '23 грудня – 20 січня'},
    {month: 'Водолій', date: '21 січня – 19 лютого'},
    {month: 'Риби', date: '20 лютого – 20 березня'},
    {month: 'Овен', date: '21 березня – 19 квітня'},
    {month: 'Телець', date: '21 квітня – 21 травня'},
    {month: 'Близнюки', date: '22 травня – 21 червня'},
    {month: 'Рак', date: '22 червня – 22 липня'},
    {month: 'Лев', date: '23 липня – 21 серпня'},
    {month: 'Діва', date: '22 серпня – 23 вересня'},
    {month: 'Терези', date: '24 вересня – 23 жовтня'},
    {month: 'Скорпіон', date: '24 жовтня – 22 листопада'},
    {month: 'Стрілець', date: '23 листопада – 22 грудня'}
  ];

  return (
    <table>
      <thead>
        <th>{'Місяць'}</th>
        <th>{'Дата'}</th>
      </thead>
      <tbody>
      {monthDate.map((item, i) => {
        return (
          <tr key={i}>
          <th>{item.month}</th>
          <td>{item.date}</td>
          </tr>
        )
      })}
      </tbody>
    </table>
  )
}

export default Goroscop;