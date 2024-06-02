import { SocketIoConfig } from "ngx-socket-io";
import { environment } from "src/environments/environment";

export const config: SocketIoConfig = { url:environment.socketUrl , options: {
    autoConnect: false,
    transports: ['websocket'],
    reconnection: true,
    reconnectionDelay: 1000,
    reconnectionDelayMax: 5000,
} };