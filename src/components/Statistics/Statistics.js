import s from './Statistics.module.css';
import propTypes from 'prop-types';
import generateRandomColor from 'components/common/generateRandomColor';

function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.statList}>
        {stats.map(({ label, percentage, id }) => (
          <li
            className={s.item}
            key={id}
            style={{ backgroundColor: generateRandomColor() }}
          >
            <span className={s.label}>{label}</span>
            <span className={s.percentage}>{`${percentage}%`}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: propTypes.string,
  stats: propTypes.array.isRequired,
};

export default Statistics;
