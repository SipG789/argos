const mongoose = require('mongoose');


















mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-network', {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Use this to log mongo queries being executed!
mongoose.set('debug', true);



app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
