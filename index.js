let employee = {
    name: "John Doe",
    streetAddress: "123 Main St"
  };
  
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    let updatedEmployee = { ...employee, [key]: value };
    return updatedEmployee;
  }
let updatedEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, "name", "Jane Smith");
  
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
 }
  
function deleteFromEmployeeByKey(employee, key) {
    let updatedEmployee = { ...employee };
    delete updatedEmployee[key];
    return updatedEmployee;
}
  
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  console.log(destructivelyDeleteFromEmployeeByKey(employee, "streetAddress"));