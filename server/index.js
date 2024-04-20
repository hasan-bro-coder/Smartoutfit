



// const express = require("express");
// const cors = require("cors");
// const app = express();
// const port = 3000;
// const uri = "mongodb+srv://hasan:8119114h@cluster0.2iuyc9l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0" || process.env["mongo"];
// const mongoose = require("mongoose");

// app.use(cors());
// app.use(express.json());

// mongoose.connect(uri);
// const Cloths = mongoose.model("Cloth", {
// 	name: String,
// 	price: Number,
// 	quantity: Number,
// 	image: String,
// 	description: String,
// 	category: [String],
// });



// app.route("/admin")
// 	.get(async(req, res) => {
// 		const users = await Cloths.find(req.body || {}
// 			// !req.body?.category || req.body.category == "all" || req.body.category == '' ? {} : { category: req.body.category },
// 		);

// 		// const users = await Cloths.find(
// 			// req.body?.id && req.body?.category ? { _id: req.body?.id,category: req.body?.category } : req.body?.id ? { _id: req.body?.id} : 
// 			// req.body?.category ? {category: req.body?.category } : {},
// 		// );

// 		const userMap = {};
// 		users.forEach((user) => {
// 			userMap[user._id] = user;
// 		});

// 		res.send(userMap);
// 	})
// 	.post(async(req, res) => {
// 		console.log(req.body)
// 		if (!req.body?.data) {
// 			res.status(400).send("data is required");
// 			return 0;
// 		}
// 		await Cloths.create(req.body?.data);
// 		res.json({res:"ADDED"});
// 	})
// 	.patch(async (req, res) => {
// 		if (!req.body?.id) {
// 			res.status(400).send("id is required");
// 			return 0;
// 		}
// 		await Cloths.findByIdAndUpdate(req.body?.id,req.body?.data);
// 		res.json({res:"UPDATED"});
// 	})
// 	.delete(async (req, res) => {
// 		if (!req.body?.id) {
// 			res.status(400).send("id is required");
// 			return 0;
// 		}
// 		await Cloths.deleteOne({ _id: req.body?.id });
// 		res.json({res:"DELETED"});
// 	});

// app.post("/buy", (res, req) => {});

// app.get("/search/:all", async (req, res) => {
// 	const users = await Cloths.find(
// 		req.params.all == "all" ? {} : { category: req.params.all },
// 	);

// 	// const userMap = {};
// 	// users.forEach((user) => {
// 	// 	userMap[user._id] = user;
// 	// });

// 	res.send(users);
// });
// app.get("/product/:id", async (req, res) => {
// 	if(!req.params?.id){
// 		res.status(404).send("what???");
// 		return 0;
// 	}
// 	const users = await Cloths.findById(req.params?.id);

// 	res.send(users);
// });
// app.get("*", function (req, res) {
// 	res.status(404).send("what???");
// });

// app.listen(port, () => {
// 	console.log(`Example app listening on port ${port}`);
// });