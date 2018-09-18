class Users {
  constructor() {
    this.users = [];
  }

  addUser(id, name, room) {
    const user = {id, name, room};
    this.users.push(user);
    return user;
  }

  removeUser(id) {
    const user = this.getUser(id);

    if (user) {
      this.users = this.users.filter(user => user.id !== id)
    }

    return user;
  }

  getUser(id) {
    return this.users.filter(user => user.id === id)[0]    
  }

  getUserList(room) {
    const users = this.users.filter(user => user.room.toLowerCase() === room.toLowerCase());
    return users.map(user => user.name);
  }

  isExistingInRoom(name, room) {
    return this.users.findIndex(user => user.name.toLowerCase() === name.toLowerCase() && user.room.toLowerCase() === room.toLowerCase()) !== -1;
  }
}

module.exports = {Users};
