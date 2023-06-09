import styled from 'styled-components';
import {
  Card, CardContent, CardMedia, Typography,
} from '@mui/material';

const Counter = styled.div`
position: absolute;
top: -5px;
left: 10px;
width: 10px;
height: 10px;
background-color: red;
border-radius: 50%;
font-size: 12px;
display: flex;
align-items: center;
justify-content: center;
`;

const Wrapper = styled(Card)`
  && {
    width: 480px;
    margin: 30px auto;
  }
`;

const NotificationsItem = styled(CardContent)`
  && {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 80px;
    padding: 0 20px;
    background-color: white;
    border-radius: 5px;
    transition: all .3s ease-in;
    cursor: pointer;
  }

  &:hover {
    background-color: #f7f7f7;
    transform: scale(0.95);
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, .2);
  }
`;

const NotificationsItemAvatar = styled(CardMedia)`
  && {
    width: 75px;
    height: 75px;
    margin-right: 20px;

    border-radius: 50%;
  }
`;

const NotificationsItemContent = styled('div')`
  width: calc(100% - 105px);
`;

const NotificationsItemTitle = styled(Typography)`
  && {
    letter-spacing: 2px;
    font-family: 'atvice', sans-serif;
    font-size: 17px;
  }


`;
// ${({ variant }) => variant === 'archive' && `
//     color: white;
//   `}
const NotificationsItemMessage = styled(Typography)`
  && {
    font-family: Roboto, sans-serif;
    font-size: 14px;
    color: #929292;
  }


`;
// ${({ variant }) => variant === 'archive' && `
//     color: #f3f3f3;
//   `}
const NotificationsItemOption = styled('div')`
  width: 20px;
  height: 20px;
  margin: 8px 0;

  border-radius: 50%;
  color: white;
  opacity: 0;

  font-size: 10px;
  text-align: center;
  line-height: 20px;

  cursor: pointer;
  transition: all .2s;



  ${NotificationsItem}:hover & {
    opacity: 1;
  }
`;
// ${({ variant }) => variant === 'archive' && `
//     background-color: #3dc98c;
//   `}

//   ${({ variant }) => variant === 'delete' && `
//     background-color: #c93d4d;
//   `}
export {
  NotificationsItemOption, NotificationsItemMessage, NotificationsItemTitle,
  NotificationsItemContent, NotificationsItem, Wrapper, Counter, NotificationsItemAvatar,
};
