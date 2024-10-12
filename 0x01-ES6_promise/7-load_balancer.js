export default function loadBalancer(chinaDownload, USDownload) {
  // return the first promise that resolved 
  return Promise.race([chinaDownload, USDownload]);
}
