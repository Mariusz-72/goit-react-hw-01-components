import css from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
    function getRandomHexColor() {
        return '#' + Math.floor(Math.random() * 0xffffff).toString(16);
    }

    const Statistics = props => {
    const { title, stats } = props;
        return (
            <section className={css.statistics}>
                {title && <h2 className={css.title}>{title}</h2>}
                <ul className={css.statList}>
            {stats.map(stat => (
                <li
                key={stat.id}
                className={css.item}
                style={{ backgroundColor: getRandomHexColor() }}
                >
                    <span className={css.label}>{stat.label}</span>
                    <span className={css.percentage}>{stat.percentage}%</span>
                </li>
            ))}
            </ul>
        </section>
        );
    };

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
};
export default Statistics;
