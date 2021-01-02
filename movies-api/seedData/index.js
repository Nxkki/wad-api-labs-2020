import userModel from '../api/users/userModel';

const users = [
  {
    'username': 'user1',
    'password': 'test1',
    'favourites': '[]'
  },
  {
    'username': 'user2',
    'password': 'test2',
  },
];
const genres = [
  {
    'name' : 'Movie1',
    'genre' : "Genre1",
  },
  {
    'name' : 'Movie2',
    'genre' : "Genre2",
  },
];
// deletes all user documents in collection and inserts test data
export async function loadUsers() {
    console.log('load user Data');
      try {
        await userModel.deleteMany();
        await users.forEach(user => userModel.create(user));
        console.info(`${users.length} users were successfully stored.`);
      } catch (err) {
        console.error(`failed to Load user Data: ${err}`);
      }
    }
    