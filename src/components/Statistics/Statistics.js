import styles from '../Statistics/Statistics.module.css';
import PropTypes from 'prop-types';

function generateColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.statList}>
        {stats.map(
          item =>
            <li key={item.id} className={styles.item} style={{ backgroundColor: generateColor() }}>
              <span className={styles.label}>{item.label}</span>
              <span className={styles.percentage}>{item.percentage + '%'}</span>
            </li>
        )}
      </ul>
    </section>
  )
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};

export default Statistics;