export default function signUpUser(firstName, lastName) {
  const user = new Promise((resolve, reject) => {
    const obj = {
      firstName,
      lastName,
   }
    if (obj) {
      resolve(obj);
    } else {
      reject(Error());
    }
  });
  return user;
}
