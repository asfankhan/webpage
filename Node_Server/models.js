const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// mongoose.set('useFindAndModify', false);

//Create Schema and model
const UserSchema = new Schema({
	email: String, 
    password: String,
    rooms:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Room"
    }]
});
const UserModel =  mongoose.model('Users',UserSchema);

const RoomSchema = new Schema({
    id: String,
    RoomName: String,
    Owner: String,
    Locked:Boolean,
    Description: String
},{ minimize: false });

const RoomModel = mongoose.model('Room',RoomSchema);


// const ChannelSchema = new Schema({
// 	id: String ,
// 	creater:String,
// 	name: String,
// 	description: String,
// 	locked: Boolean,
// 	usersId:[]
// });
// const IndividualChatSchema = new Schema({
// 	id: String ,
// 	description: String,
// 	locked: Boolean
// });
// const UserChannelSchema = new Schema({
// 	id: String ,
// 	creater:String,
// 	name: String,
// 	description: String,
// 	locked: Boolean
// });
// const ChannelSchema = mongoose.model('Room',ChannelSchema);

// const messageSchema = new Schema({
// 	date: Date,
// 	dateTime: String,
// 	messageData: String,
// 	messageType: 0,
// 	userId:String ,
// 	userName: String,
// 	firstName: String,
// 	lastName: String,
// });

module.exports = { 
	mongoose : mongoose,
	UserModel : UserModel,
    RoomSchema : RoomSchema,
    RoomModel : RoomModel
}