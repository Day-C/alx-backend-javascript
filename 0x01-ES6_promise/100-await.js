import { createUser, uploadPhoto } from './utils';

export default async function asyncUploadUser() {
  return Promise
    .all([await createUser(), await uploadPhoto()])
    .then((result) => ({ photo: result[1], user: result[0] }))
    .catch(() => ({ photo: null, user: null }));
}
