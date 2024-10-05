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
    .catch(() => {
      // catch failure
      const error = {
      };
      return error;
    })
    .finally(() => {
      // log regardless the resolution
      console.log('Got a response from the API');
    });
}
