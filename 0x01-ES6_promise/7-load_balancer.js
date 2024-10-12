export default function loadBalancer(chinaDownload, USDownload) {
  // return the first promise that resolves
  return Promise.race([chinaDownload, USDownload]);
}
