import React from 'react';
import { Counter } from './style'



interface FriendIconProps {
  notificationCount: number;
}





const FriendIcon: React.FC<FriendIconProps> = ({ notificationCount }) => {
  return (
    <div className="CloseByIcon">
       { notificationCount === 0 ? null : (<Counter></Counter>)}
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="25" height="25"
viewBox="0 0 24 24">
<path d="M 8 2.25 A 5.25 5.25 0 0 0 4.7753906 11.638672 A 6.758 6.758 0 0 0 0.25 18 L 0.25 19 A 2.752 2.752 0 0 0 3 21.75 L 13 21.75 A 2.752 2.752 0 0 0 15.75 19 L 15.75 18 A 6.758 6.758 0 0 0 11.222656 11.636719 A 5.25 5.25 0 0 0 8 2.25 z M 17.833984 7.2539062 A 3.751 3.751 0 0 0 14.660156 12.710938 A 3.57 3.57 0 0 0 15.509766 13.789062 C 15.519766 13.809063 15.529063 13.810313 15.539062 13.820312 L 15.529297 13.820312 A 7.754 7.754 0 0 1 16.75 18 L 16.75 19 A 3.692 3.692 0 0 1 15.539062 21.75 L 21 21.75 A 2.748 2.748 0 0 0 23.75 19 A 5.724 5.724 0 0 0 20.466797 13.824219 A 3.741 3.741 0 0 0 21.75 11 A 3.751 3.751 0 0 0 17.833984 7.2539062 z"></path>
</svg>
</div>
  );
}

export default FriendIcon;