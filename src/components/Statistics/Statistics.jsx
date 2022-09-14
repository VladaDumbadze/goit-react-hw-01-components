import PropTypes from 'prop-types';
// import StatisticList from './StatisticList';
import css from './Statistics.module.css';

export default function Statistics({ title, stats }) {
  // const stats = props.stats;
  // const StatisticLi = stats.map(stat => (
  //   <StatisticList
  //     key={stat.id}
  //     label={stat.label}
  //     percentage={stat.percentage}
  //   />
  // ));

  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title}</h2>
      <ul className={css.statList}>
        {stats.map(item => (
          <li key={item.id} className={css.item}>
            <span className={css.label}>{item.label}</span>
            <span className={css.percentage}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

// Statistics.propTypes = {
//   props: PropTypes.arrayOf(
//     PropTypes.shape({
//       label: PropTypes.string.isRequired,
//       percentage: PropTypes.number.isRequired,
//       id: PropTypes.string.isRequired,

//     })
//   ),
// };

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

Statistics.defaultProps = {
  title: '',
  label: 'format',
};
