import io from 'socket.io-client';

console.log('connect to socket');
const socket = io('http://localhost:3000');

socket.on('connect', () => {
  console.log('connected');
});
socket.on('message', data => {
  console.log('event', data);
  chrome.runtime.sendMessage({ type: "message", message: data }, function (response) {
    console.log('ack');
  });
});
socket.on('disconnect', () => {
  console.log('disconnect');
});