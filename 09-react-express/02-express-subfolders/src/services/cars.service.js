async function getMultiple(){
    //return multiple cars
    carReturn = [{
        id: 1,
        name: "Mercedes",
        wheels: 5
        },{
        id: 2,
        name: "BMW",
        wheels: 3
        }]
    return (carReturn);
}

async function getOne(carId){
    //return one car
    carReturn = {
        id: carId,
        name: "Fancy Car",
        wheels: 4
        }
    return (carReturn);
}

async function create(carInfo) {
    //Use ORM or native SQL insert statement to insert values from carInfo into database

    let message = 'Error in creating car';
    console.log(`Inserting ${carInfo}`);

    //check here if insert was successful
    if (true) {
      message = 'car created successfully';
    }

    return {message, carInfo};
}

async function update(id, carInfo) {
    //Use ORM or native SQL update statement to update values from carInfo into database

  let message = 'Error in updating car';
  console.log(`Updating car ${id} with ${carInfo}`);

    //check here if update was successful
    if (true) {
    message = 'car updated successfully';
  }

  return {message, carInfo, id};
}

async function remove(id){
    //Use ORM or native SQL insert statement to insert values from carInfo into database

    let message = 'Error in deleting car';
    console.log(`Deleting car ${id}`);

    //Check if delete successful
    if (true) {
        message = 'car deleted successfully';
    }

    return {message};
}

module.exports = {
  getMultiple,
  getOne,
  create,
  update,
  remove
}
