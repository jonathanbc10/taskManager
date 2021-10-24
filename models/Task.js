const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Must provide a name'],
        trim: true,
        maxlength: [20, 'Name cannot be more than 20 chars'],
        minlength: [3, 'Name must be at least 3 chars long, please. Good lord!']
    },
    completed: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Task', TaskSchema);