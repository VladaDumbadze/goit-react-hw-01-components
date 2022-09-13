import PropTypes from 'prop-types';

import css from './Profile.module.css';

export default function Profile({ user }) {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={user.avatar} alt="User avatar" className={css.avatar} />
        <p className="name">{user.username}</p>
        <p className="tag">{user.tag}</p>
        <p className="location">{user.location}</p>
      </div>

      <ul className={css.stat}>
        <li className={css.profileItem}>
          <span className={css.label}>Followers </span>
          <span className="quantity">{user.stats.followers}</span>
        </li>
        <li className={css.profileItem}>
          <span className={css.label}>Views </span>
          <span className="quantity">{user.stats.views}</span>
        </li>
        <li className={css.profileItem}>
          <span className={css.label}>Likes </span>
          <span className="quantity">{user.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      followers: PropTypes.number.isRequired,
    })
  ),
};
