import PropTypes from 'prop-types';
import css from './Profile.module.css';

export default function Profile({
  username,
  tag,
  location,
  avatar,
  statsLikes,
  statsViews,
  statsFollowers,
}) {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt="User avatar" className={css.avatar} />
        <p className="name">{username}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.profileItem}>
          <span className={css.label}>Followers </span>
          <span className="quantity">{statsFollowers}</span>
        </li>
        <li className={css.profileItem}>
          <span className={css.label}>Views </span>
          <span className="quantity">{statsViews}</span>
        </li>
        <li className={css.profileItem}>
          <span className={css.label}>Likes </span>
          <span className="quantity">{statsLikes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  statsLikes: PropTypes.number,
  statsViews: PropTypes.number,
  statsFollowers: PropTypes.number,
};
