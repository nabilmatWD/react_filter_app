import React from "react";
import RoomsFilter from "./RoomsFilter";
import RoomList from "./RoomList";
import { withRoomConsumer } from "../Context";
import Loading from "./Loading";

function RoomContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <RoomsFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </div>
  );
}

export default withRoomConsumer(RoomContainer);

// import React from "react";
// import RoomsFilter from "./RoomsFilter";
// import RoomList from "./RoomList";
// import { RoomConsumer } from "../Context";
// import Loading from "./Loading";

// export default function RoomsContainer() {
//   return (
//     <RoomConsumer>
//       {value => {
//         // console.log(value);
//         const { loading, sortedRooms, rooms } = value;
//         if (loading) {
//           return <Loading />;
//         }
//         return (
//           <div>
//             hello from rooms container
//             <RoomsFilter rooms={rooms} />
//             <RoomList rooms={sortedRooms} />
//           </div>
//         );
//       }}
//     </RoomConsumer>
//   );
// }
