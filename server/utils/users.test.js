const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
  let users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: 1,
      name: 'Carlo',
      room: 'Room 1'
    }, {
      id: 2,
      name: 'Gino',
      room: 'Room 2'
    }, {
      id: 3,
      name: 'Catapang',
      room: 'Room 1'
    }]
  });

  it('should add new user', () => {
    let users = new Users();
    const user = {
      id: '123',
      name: 'Gino',
      room: 'Room'
    };
    
    users.addUser(user.id, user.name, user.room);
    
    expect(users.users).toEqual([user]);
  });

  it('should return names for Room 1', () => {
    const userList = users.getUserList('Room 1');
    expect(userList).toEqual(['Carlo', 'Catapang']);
  });

  it('should return names for Room 2', () => {
    const userList = users.getUserList('Room 2');
    expect(userList).toEqual(['Gino']);
  });

  it('should remove a user', () => {
    const resUser = users.removeUser(1);
    expect(resUser).toEqual({
      id: 1,
      name: 'Carlo',
      room: 'Room 1'
    });
    expect(users.users.length).toBe(2)
  })

  it('should not remove a user', () => {
    const resUser = users.removeUser(99);
    expect(resUser).toBeFalsy();
    expect(users.users.length).toBe(3)
  })

  it('should find a user', () => {
    const resUser = users.getUser(1);
    expect(resUser).toEqual({
      id: 1,
      name: 'Carlo',
      room: 'Room 1'
    });
  });

  it('should not find a user', () => {
    const resUser = users.getUser(99);
    expect(resUser).toBeFalsy();
  });

  it('should find an existing user in a room', () => {
    const res = users.isExistingInRoom('Carlo', 'Room 1');
    expect(res).toBeTruthy()
  })

  it('should not find an existing user in a room', () => {
    const res = users.isExistingInRoom('Carlo', 'Room 2');
    expect(res).toBeFalsy()
  })
});
