export default function getResponseFromAPI() {
  const promise = new Promise((resolve, reject) => {
    // do something
    const val = 1;
    if (val) {
      resolve('Success');
    } else {
      reject(Error('Failure'));
    }
  });
  return promise;
}
