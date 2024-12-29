import { createUser, uploadPhoto } from './utils';

export default async function asyncUploadUser() {
  return Promise
    .all([await createUser(), await uploadPhoto()])
    .then((results) => ({ photo: results[0], user: results[1] }))
    .catch(() => ({ photo: null, user: null }));
}
