const mongose = require('mongoose');
const chefSchema = new mongose.Schema({
    name: String,
    speciality: String,
});

module.exports = mongose.model('Chef', chefSchema);