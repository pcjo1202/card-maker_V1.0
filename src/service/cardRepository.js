// eslint-disable-next-line no-unused-vars
import firebaseApp from './firebase'
import {
  getDatabase,
  set,
  ref,
  get,
  child,
  update,
  push
} from 'firebase/database'

export class CardRepository {
  async saveCard (userId, cardData) {
    const database = getDatabase(firebaseApp)
    set(ref(database, `users/${userId}`), cardData) //
      .then(console.log('저장 성공!'))
  }

  async getCards (userId) {
    const database = getDatabase(firebaseApp)
    const dbRef = ref(database)

    try {
      const snapshot = await get(child(dbRef, `users/${userId}`)) //

      return snapshot.val()
    } catch (error) {
      console.error(error)
    }
  }

  updateCard (cardData, userId) {
    const database = getDatabase(firebaseApp)
    // const newPostKey = push(child(ref(database), 'posts')).key

    // Write the new post's data simultaneously in the posts list and the user's post list.
    const updates = {}
    updates[`/users/${userId}`] = cardData

    return update(ref(database), updates)
  }
}
