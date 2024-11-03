export default function handleResponseFromAPI(promise) {
  promise
    .then(() => {
      // render on success
      return { status: 200, body: 'success' };
    })
    .catch(() => {
      // catch failure
      return new Error();
    })
    .finally(() => {
      // log regardless the resolution
      console.log('Got a response from the API');
    });
}
