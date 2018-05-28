// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/cat_app');

// const catSchema = new mongoose.Schema({
//     name: String,
//     age: Number,
//     temperament: String
// });

// const Cat = mongoose.model('cat', catSchema);

// var george = new Cat({
//     name: 'Mrs. Norris',
//     age: 42,
//     temperament: 'Evil'
// });

// george.save(function(err, res) {
//     if(err)
//         console.log('Something wrong : ' + err);
//     else
//         console.log('Inserted : ' + res);
// });


const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cat_app');

const catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

const Cat = mongoose.model('Cat', catSchema);

// const geroge = new Cat({
//     name: 'George',
//     age: 11,
//     temperament: 'Grouchy'
// });

// const geroge = new Cat({
//     name: 'Mrs. Norris',
//     age: 7,
//     temperament: 'Evil'
// });

// geroge.save( (err, cat)=> {
//     if(err) {
//         console.log('Something wrong');
//     } else {
//         console.log('Cat Added : ' + cat);
//     }
// } );


// Cat.create({
//     name: "Snow White",
//     age: 15,
//     temperament: 'Bland'
// }, (err, cat)=>{
//     if(err)
//         console.log(err);
//     else
//         console.log(Cat);
// });

Cat.find({}, (err, cats)=>{
    if(err) {
        console.log('Error occurs.');
        console.log(err);
    } else {
        console.log('All the cats');
        console.log(cats);
    }
});