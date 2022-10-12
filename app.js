// .splice() *This is one of several different ways to use splice(), read the documentation
var lunchItems = ['Turkey Sandwich', 'Falafel', 'Paella', 'Processor Speed', 'RAM', 'Gyro'];
var indexOfFirstItemToBeRemoved = 3;
var numberOfItemsToRemove = 2;
var itemToBeAdded1 = 'Fish Tacos';
var itemToBeAdded2 = 'Pizza';

lunchItems.splice(indexOfFirstItemToBeRemoved, numberOfItemsToRemove, itemToBeAdded1, itemToBeAdded2);
console.log('list of lunch items after splicing:', lunchItems);
// Logs [ 'Turkey Sandwich', 'Falafel', 'Paella', 'Fish Tacos', 'Pizza', 'Gyro' ]