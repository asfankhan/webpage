var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

const { mongoose, UserModel, RoomSchema, RoomModel} = require('./models.js');


http.listen(3000, ()=>{
	console.log('listening on: 3000'); 
	mongoose.connect('mongodb://localhost/testChat');
});

mongoose.connection.once("open", ()=>{
	console.log('connected to mongodb: port 27017')
}).on("error", ()=>{
	console.log('Connection error: Could not connect')
})

// app.use((req, res, next) => {
// 	res.header("Access-Control-Allow-Origin", "http://localhost:4200"); //on the demo server, need to replace with the below
// 	// res.header("Access-Control-Allow-Origin", "*");
// 	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
// 	res.header("Access-Control-Allow-Credentials", "true");
// 	next();
// });

// app.get('/', (req, res) => res.send('Hi!')) // on the demo server, this line should be replace with the below lines
// // app.get('/', (req, res) => { 
// // 	res.send('Hello from chat server! iisnode version is ' + process.env.IISNODE_VERSION + ', node version is ' + process.version + ']');
// // })


var Users={}

io.sockets.on('connection', function (socket) {

	socket.on("Sign Up", async (userData)=>{

		console.log("Sign Up======")
		let obj = await UserModel.findOne({email:userData.email})
		console.log(obj)

		if(obj){
			socket.emit("Sign Up", {error:true, message:"Email in Use"})
		}else{

			let temp = new UserModel({
				email: userData.email, 
				password: userData.password		
			})

			let message = await temp.save( async(err, message)=>{
				if(err)
					socket.emit("Sign Up", {error:true, message:"Saving Error"})

				socket.emit("Sign Up", {error:false, message:"Saved New User"})
			})

		}

		console.log("Finished")
	})

	socket.on("Sign In", async (userData)=>{

		console.log("Sign In======")
		let obj = await UserModel.findOne({email:userData.email})
		console.log(obj)

		if(obj){
			socket.email = userData.email;
			Users[userData.email] = socket;
			socket.emit("Sign In", {error:false, data: obj})
		}else{
			socket.emit("Sign In", {error:true, message: "User not Found"})
		}

	})

	socket.on("Sign Out", ()=>{
		Users[socket.email] = null;
		socket.email = null;

		socket.emit("Sign Out", {error:false, message: "User Logged Out"})

	})

	socket.on("Room Get", ()=>{

	});
	
	socket.on("Room Create", (userData, roomName)=>{
		console.log(userData)
		console.log(roomName)
		
		let temp = new RoomModel({
			RoomName: roomName,
			Owner: userData._id,
			Locked:false,
			Description: "Room created by " + userData.email
		})

		console.log(temp)
	});

	socket.on("Room Join", ()=>{

	});

	socket.on("check", ()=>{
		socket.emit('Found Individual Chat', 'temp');

	})
});

