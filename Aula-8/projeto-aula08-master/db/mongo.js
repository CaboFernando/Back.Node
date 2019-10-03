const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://luis:Luis1234@cluster0-4tgeh.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true});

require('../models/user.model');
require('../models/post.model');