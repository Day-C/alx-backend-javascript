export default function uploadPhoto(fileName) {
  const promise = new Promise((resolve, reject) => {
    if (fileName === null) {
      resolve('Success');
    } else {
      reject(Error(`${fileName} cannot be processed`));
    }
  });
  return promise;
}
