const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const mongoURI = process.env.MONGO_URI;
const mongoDB = async () => {
    await mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
        if (err)
            console.log("-------", err);
        else {
            console.log('connected successfully');
            const fetched_data = await mongoose.connection.db.collection("games_items");
            fetched_data.find({}).toArray(async function (err, data) {
                const gamesCategory = await mongoose.connection.db.collection("games_category");
                gamesCategory.find({}).toArray(function (err, catData) {
                    if (err) console.log(err);
                    else {
                        global.gamesData = data;
                        global.gamesCategory = catData;
                        //console.log(global.gamesData);
                    }
                })
                //if (err) console.log(err);
                //else {
                //global.games_items = data;
                //console.log(global.games_items);
                //}
            })
        }
    });
}

module.exports = mongoDB;