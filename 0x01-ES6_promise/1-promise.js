export default function getFulResponseFromAPI(success) {
  const promise = new Promise((resolve, reject) => {
    if (success === true) {
      const obj = {
        status: 200,
        body: 'Success',
      };
      resolve(obj);
    } else {
      reject(Error('The fake API is not working currently'));
    }
  });
  return promise;
}
