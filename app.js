const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  mongoose.connect('mongodb://0.0.0.0:27017/fruitsDB', {useNewUrlParser: true});

  const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: [true, "Please enter name of Fruit"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
    });

    const personSchema = new mongoose.Schema({
        name: String,
        age: Number,
        favouriteFruit: fruitSchema
    })

    const Person = mongoose.model("Person",personSchema);

    const Fruit = mongoose.model("Fruit", fruitSchema);

    const fruit = new Fruit ({
        // name: "Apple",
        rating: 7,
        review: "Pretty Solid!"
    });

    const kiwi = new Fruit({
        name: "Kiwi",
        rating: 10,
        review: "The best Fruit!"
    })

    const orange = new Fruit({
        name: "Orange",
        rating: 4,
        review: "Too sour for me"
    })

    const banana = new Fruit({
        name: "Banana",
        rating: 9,
        review: "Easy to eat"
    })

    const pineapple = new Fruit({
        name: "Pineapple",
        rating: 9,
        review: "Great Fruit"
    })

    // await pineapple.save();

    // const person = new Person({
    //     name: "Amy",
    //     age: 12,
    //     favouriteFruit: pineapple
    // })

    const mango = new Fruit({
        name: "Mango",
        rating: 7,
        review: "Yellow Fruit"
    })

    // await mango.save();

    const person = new Person({
        name: "John",
        age: 37,
    })

    // await person.save();

    // Fruit.insertMany([kiwi,orange,banana],function(err){
    //     if(err){
    //         console.log(err);
    //     }else{
    //         console.log("Successfully Saved Data in FruitsDB.")
    //     }
    // });

    // await fruit.save();

    // Fruit.updateOne({_id: "630ced531ef0eb7457ee8b42"}, {name: "Peach"}, function(err){
    //     if(err){
    //         console.log(err);
    //     }
    //     else{
    //         console.log("Bhery Good");
    //     }
    // });

    Fruit.deleteOne({name: "Peach"}, function(err){
        if(err){
            console.log(err);
        }
        else{
            console.log("Bhery Good was Deleted");
        }
    })

    Person.updateOne({name: "John"}, {favouriteFruit: mango}, function(err){
        if(err){
            console.log(err);
        }
        else{
            console.log("John was Updated");
        }
    })

    Fruit.find(function(err,fruits){
        if(err){
            console.log(err);
        }else{
            mongoose.connection.close();

            fruits.forEach(function(fr) {
                console.log(fr.name);
            });
        }
    });
}
