export default function handleResponseFromAPI(promise) {
  promise
    .then(() => {
      // render on success
      const obj = {
        status: 200,
        body: 'success',
      };
      return obj;
    })
    .catch((error) => {
      // catch failure
      return new Error();
    })
    .finally(() => {
      // log regardless the resolution
      console.log('Got a response from the API');
    });
}
