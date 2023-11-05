const backupConfigTest = {
  protocol: 'https',
  port: 3001,
  log(str:string) {
    console.log(str);
  }
};
const backupConfig1Test = {
  protocol: 'https',
  port: 3001,
  role: 'admin',
  log(str:string) {
    console.log(str);
  }
};

interface backupConfigTest {
  protocol: string,
  port: number
}

const startServerTest = (config:backupConfigTest): 'Serer started' => {
  console.log(`Serer started in ${config.protocol}: //server:${config.port}`);
  return 'Serer started';
};
startServerTest(backupConfigTest);
startServerTest(backupConfig1Test);

