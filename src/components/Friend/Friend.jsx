const Friend = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p>{isOnline === true ? "online" : "offline"}</p>
    </div>
  );
};

export default Friend;
