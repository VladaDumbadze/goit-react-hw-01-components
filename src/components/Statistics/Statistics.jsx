import PropTypes from 'prop-types';
import StatisticList from './StatisticList';
import css from './Statistics.module.css';

export default function Statistics(props) {
  const stats = props.stats;
  const StatisticLi = stats.map(stat => (
    <StatisticList
      key={stat.id}
      label={stat.label}
      percentage={stat.percentage}
    />
  ));

  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{props.title}</h2>

      <ul className={css.statList}>{StatisticLi}</ul>
    </section>
  );
}

Statistics.propTypes = {
  props: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
