import styled from 'styled-components';

export const ChatContainer = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  width: 300px;
  height: 400px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 9999;
`;

export const ChatHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: #f0f0f0;
  font-weight: bold;
  font-size: 20px;
`;

export const ChatBody = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;
  padding: 10px;
`;

export const ChatFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background-color: #f0f0f0;
  padding: 10px;
  position: fixed;
  bottom: 0;
`;

export const ChatInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  padding: 10px;
`;

export const ChatButton = styled.button`
  background-color: #0084ff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px;
`;

