import Friend from "../Friend/Friend";

const FriendList = () => {
  return (
    <div>
      <Friend
        avatar={"https://cdn-icons-png.flaticon.com/512/1998/1998592.png"}
        name={"Mango"}
        isOnline={true}
      />
      <Friend
        avatar={"https://cdn-icons-png.flaticon.com/512/616/616438.png"}
        name={"Kiwi"}
        isOnline={false}
      />
      <Friend
        avatar={"https://cdn-icons-png.flaticon.com/512/1623/1623681.png"}
        name={"Ajax"}
        isOnline={true}
      />
      <Friend
        avatar={"https://cdn-icons-png.flaticon.com/512/2977/2977285.png"}
        name={"Jay"}
        isOnline={true}
      />
      <Friend
        avatar={"https://cdn-icons-png.flaticon.com/512/1998/1998749.png"}
        name={"Poly"}
        isOnline={false}
      />
    </div>
  );
};

export default FriendList;
