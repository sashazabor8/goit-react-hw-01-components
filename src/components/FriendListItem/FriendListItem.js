import s from './FriendListItem.module.css';
import propTypes from 'prop-types';

function FriendListItem({ friend }) {
  return (
    <li className={s.item}>
      <span
        className={s.status}
        style={
          friend.isOnline
            ? { backgroundColor: 'green' }
            : { backgroundColor: 'red' }
        }
      ></span>
      <img
        className={s.avatar}
        src={friend.avatar}
        alt="User avatar"
        width="48"
      />
      <p className={s.name}>{friend.name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  friend: propTypes.shape({
    avatar: propTypes.string,
    name: propTypes.string,
    isOnline: propTypes.bool,
  }),
};

export default FriendListItem;
