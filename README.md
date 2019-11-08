# AwesomeProject
My First React Native App

React Native is an open-source mobile application framework created by Facebook. It is used to develop applications for Android, iOS, Web and UWP by enabling developers to use React along with native platform capabilities.

Assuming that you have Node 10 LTS or greater installed, you can use npm to install the Expo CLI command line utility, this command is used to install react native on your system:

npm install -g expo-cli

Then run the following commands to create a new React Native project called "AwesomeProject", this will take few minute to create your first react native project:

expo init AwesomeProject

cd AwesomeProject
npm start # you can also use: expo start

If you use node of version - 12.11 or above and you get an error Invalid regular expression then, there is an invalid regular expression that needed changed.
It appears in \node_modules\metro-config\src\defaults\blacklist.js I changed the first expression under sharedBlacklist from:

var sharedBlacklist = [
  /node_modules[/\\]react[/\\]dist[/\\].*/,
  /website\/node_modules\/.*/,
  /heapCapture\/bundle\.js/,
  /.*\/__tests__\/.*/
];

to

var sharedBlacklist = [
  /node_modules[\/\\]react[\/\\]dist[\/\\].*/,
  /website\/node_modules\/.*/,
  /heapCapture\/bundle\.js/,
  /.*\/__tests__\/.*/
];
