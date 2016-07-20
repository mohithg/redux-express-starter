import Test from './model';

let Controllers = {
  save: (text, callback) => {
    Test.create({name: text}, function (err) {
      callback(err);
    });
  },
  getAll: (callback) => {
    Test.find({}, function (err, records) {
      callback(err, records);
    });
  }
};

export default Controllers;
