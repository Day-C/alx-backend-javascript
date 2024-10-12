// import ClassRoom from './0-classroom';
import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const finalList = [];
  const cls1 = new ClassRoom(19);
  finalList.push(cls1);
  const cls2 = new ClassRoom(20);
  finalList.push(cls2);
  const cls3 = new ClassRoom(34);
  finalList.push(cls3);

  return finalList;
}
