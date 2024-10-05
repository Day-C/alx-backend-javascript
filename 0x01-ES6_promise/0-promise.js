export default function getResponseFromAPI() {
  const promise = new Promise((resolve, reject) => {
    // do something
    const v = 1;
    if (v) {
      resolve('Success');
    } else {
      reject(Error('Failure'));
    }
  });
  return promise;
}
