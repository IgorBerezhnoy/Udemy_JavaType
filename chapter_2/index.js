// //ts-node chapter_2/index.ts
// //tsc chapter_2/index.ts
// //tsc --init
// // tsc -help
var backupConfig = {
    protocol: 'https',
    port: 3001
};
//23. Более продвинутый Type и пересечение типов (Intersection)
// type ProtocolType = 'http' | 'https';
// type PortType = 3000 | 3001;
// type ServerConfigType = {
//   protocol: ProtocolType,
//   port: PortType
// };
// type Role = {
//   role: string
// }
// type ServerConfigWithRoleType = ServerConfigType & Role;
// const serverConfig: ServerConfigWithRoleType = {
//   protocol: 'https',
//   port: 3001,
//   role: 'admin'
// };
// const backupConfig: ServerConfigType = {
//   protocol: 'https',
//   port: 3001
// };
// type startServerType = (protocol: ProtocolType, port: PortType) => 'Serer started'
// const startServer: startServerType = (protocol, port): 'Serer started' => {
//   console.log(`Serer started in ${protocol}: //server:${port}`);
//   return 'Serer started';
// };
//
// startServer(serverConfig.protocol, serverConfig.port);
