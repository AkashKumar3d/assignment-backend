const app = require("./app");

let PORT = process.env.PORT || 3500;

//Handling Uncaugth Exception
process.on("UncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to uncauht exception`);
  
    server.close(() => {
      process.exit(1);
    });
  });
  
  //routes
  
  const server = app.listen(PORT, () => {
    console.log(`server is running in http://localhost:${PORT}`);
  });
  
  // unhandled promise rejection
  
  process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`shutting down the server due to the unhandle promise rejection`);
  
    server.close(() => {
      process.exit(1);
    });
  });
  