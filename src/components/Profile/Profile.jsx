import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profile}>
      <div className={css.imgWraper}>
        <img className={css.image} src={image} alt="User avatar" />
        <p className={css.profileText}>{name}</p>
        <p className={css.profileText}>{tag}</p>
        <p className={css.profileText}>{location}</p>
      </div>

      <ul className={css.profileList}>
        <li className={css.listItem}>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={css.listItem}>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={css.listItem}>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
