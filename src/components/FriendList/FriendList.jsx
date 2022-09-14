import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css';

export default function FriendList(props) {
  const friends = props.friends;
  const FriendLiItem = friends.map(friend => (
    <FriendListItem
      key={friend.id}
      name={friend.name}
      avatar={friend.avatar}
      isOnline={friend.isOnline}
      id={friend.id}
    />
  ));
  return <ul className={css.friendList}>{FriendLiItem}</ul>;
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
