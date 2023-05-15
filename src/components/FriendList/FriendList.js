import s from './FriendList.module.css';
import propTypes from 'prop-types';
import FriendListItem from 'components/FriendListItem';

function FriendList({ friends }) {
  return (
    <ul className={s.friendList}>
      {friends.map(friend => {
        return <FriendListItem key={friend.id} friend={friend} />;
      })}
    </ul>
  );
}

FriendList.propTypes = {
  friends: propTypes.arrayOf(propTypes.object).isRequired,
};

export default FriendList;
