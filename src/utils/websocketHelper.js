import { w3cwebsocket } from "websocket";
import { getCookie, setCookie } from "./cookies";

export const initiateClient = () => {
  const authorization = getCookie("idToken");
  const sessionId = getCookie("sessionId");
  let client;
  try {
    if (authorization && sessionId) {
      client = new w3cwebsocket(
        `wss://x15lra2p45.execute-api.ap-south-1.amazonaws.com/dev`
      );
      console.log("==>", client);
      const initMessage = JSON.stringify({
        action: "init",
        authorization,
        sessionId
      });
      client.onopen = () => {
        console.log("Connection opened for Websockets..", Date());
        client.send(initMessage);
      };
    }
  } catch (error) {
    client = null;
  }
  return client;
};

export const handleWebsocketResponse = message => {
  console.log("Message from websocket...", message);
  const { sessionStatus, tokens, sessionId } = message;
  if ((sessionStatus === "new" && tokens.IdToken, sessionId)) {
    setCookie("sessionId", sessionId);
    setCookie("idToken", tokens.IdToken);
  }
  return;
};
