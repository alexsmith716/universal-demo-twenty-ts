import { matchRoutes } from 'react-router-config';

function getPromises(match, store) {
  const arr = match.map(q => q.route.loadData).filter(r => r !== undefined);
  console.log('##################### asyncGetPromises > getPromises() > array: ', arr)
  return arr.map(a => a(store));
}

async function asyncGetPromises(routes, pathname, store) {
  const match = matchRoutes(routes, pathname);
  const promises = await getPromises(match, store);
  console.log('##################### asyncGetPromises > await getPromises(): ', promises);
  await Promise.all(promises);
}

export default asyncGetPromises;
