import { createUser, uploadPhoto } from './utils';

export default async function asyncUploadUser() {
  return Promise.all([await createUser(), await uploadPhoto()])
    .then((results) => {
      return {
        photo: results[0],
        user: results[1],
      };
    })
    .catch(() => {
      return {
        photo: null,
        user: null,
      };
    });
}
