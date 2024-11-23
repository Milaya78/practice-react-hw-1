import Profile from "../Profile/Profile";

const ProfileList = () => {
  return (
    <div>
      <Profile
        name={"Aleksandr"}
        tag={"@aleksandr1"}
        location={"Napoli"}
        image={"https://cdn-icons-png.flaticon.com/512/2922/2922506.png"}
        stats={{ followers: 5603, views: 4827, likes: 1308 }}
      />
      <Profile
        name={"Maria"}
        tag={"@maria1"}
        location={"Salerno"}
        image={"https://cdn-icons-png.flaticon.com/512/2922/2922506.png"}
        stats={{ followers: 4500, views: 3200, likes: 1200 }}
      />
    </div>
  );
};

export default ProfileList;
