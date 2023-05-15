import propTypes from 'prop-types';
import s from 'components/Profile/Profile.module.css';

function Profile({ data }) {
  const {
    username,
    tag,
    location,
    avatar = 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
    stats,
  } = data;
  return (
    <div className={s.profile}>
      <div className="description">
        <img src={avatar} alt="User avatar" className={s.avatar} />
        <p className={s.username}>{username}</p>
        <p className={s.tag}>{`@${tag}`}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.stats}>
        {Object.entries(stats).map(([key, value]) => (
          <li key={key}>
            <span className={s.label}>{key}: </span>
            <span className={s.quantity}>{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

Profile.propTypes = {
  data: propTypes.shape({
    username: propTypes.string.isRequired,
    tag: propTypes.string.isRequired,
    location: propTypes.string.isRequired,
    avatar: propTypes.string,
    stats: propTypes.object.isRequired,
  }).isRequired,
};

export default Profile;
