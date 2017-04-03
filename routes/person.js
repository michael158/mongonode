var express = require('express');
var router = express.Router();
var Person = require('./../models/Person');

// LIST //
router.get('/', function (req, res) {
    Person.find({}, function (err, people) {
        if (err)
            return;

        res.send(people);
    });
});

// SHOW //
router.get('/:id', function (req, res) {
    Person.findById(req.params.id, function (err, person) {
        if (err)
            return;
        res.send(person);
    });

});

// CREATE //
router.post('/', function (req, res) {
    Person.create({
        name: {
            firstname: 'Wesley',
            lastname: 'Willians'
        },
        age: 23
    }, function (err, person) {
        if (err)
            return

        res.send(person);
    })
});

// INSERT MANY //
router.post('/insert-many', function (req, res) {
    var array = [{
        name: {
            firstname: 'Alvin 1',
            lastname: 'Brand'
        },
        age: 30
    },
        {
            name: {
                firstname: 'Alvin 2',
                lastname: 'Brand'
            },
            age: 27
        },
        {
            name: {
                firstname: 'Alvin 3',
                lastname: 'Brand'
            },
            age: 28
        }
    ]

    Person.insertMany(array, function (err, person) {
        if (err)
            return;

        res.send(person);
    });

});

// UPDATE //
router.put('/:id', function (req, res) {
    // MANEIRA 2//
    Person.findOneAndUpdate({_id: req.params.id}, {
        name: {
            firstname: 'Bread 2',
            lastname: 'Paints'
        }
    }, function (err, person) {
        if (err)
            return

        res.send(person);
    });

    // MANEIRA 1 //
    // Person.update({_id:req.params.id}, {
    //     name:{
    //         firstname: 'Bread',
    //         lastname: 'Paints'
    //     }
    // }, function (err, person){
    //      if(err)
    //          return;
    //
    //      res.send(person);
    // })
});

// DELETE //
router.delete('/:id', function (req, res){
    // MANEIRA 2 //
    Person.findOneAndRemove({_id: req.params.id}, function(err){
        if(err)
            return;

        res.send(req.params.id);
    });

    // MANEIRA 1 //
    // Person.remove({ _id: req.params.id }, function (err) {
    //     if(err)
    //         return;
    //     res.send(req.params.id);
    // });
});


module.exports = router;