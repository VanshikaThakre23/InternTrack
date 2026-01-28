import {connectDB} from './config/db.js';
import app from "./app.js"

// ---------database connection -----------
connectDB();

// server starting-------
const PORT = process.env.PORT;
const server = app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})

//--------error handling ------------
process.on("unhandledRejection",(err)=>{
    console.error(`Unhandled Rejection: ${err.message}`);
    server.close(()=> process.exit(1));
});

process.on("unhandledException",(err)=>{
    console.error(`Unhandled Exception: ${err.message}`);
    process.exit(1);
});

export default server;
