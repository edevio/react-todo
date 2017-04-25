import shortid from 'shortid';

module.exports = {
  fish1: {
    task: 'Clean Dishes',
    isCompleted: true,
    id: shortid.generate(),
  },
  fish2: {
    task: 'Tidy Frontroom',
    isCompleted: false,
    id: shortid.generate(),
  }

};
