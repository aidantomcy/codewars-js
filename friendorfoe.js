function friend(friends) {
  let friendsList = [];
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].length == 4) {
      friendsList.push(friends[i]);
    }
  }

  return friendsList;
}
