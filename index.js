// Write your solution in this file
const employee = {name: "Sam",
    streetAddress: "11 Broadway"
}

function updateEmployeeWithKeyAndValue(employee, label, content) {
    console.log("employee is; ", employee)
    const employee2 = {...employee}
     console.log("employee2 is; ",employee2)
    employee2[label] = content
    console.log("employee2 is; ", employee2)
    return employee2
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, label, content) {
    console.log(employee)
    employee[label] = content
    console.log(employee)
    return employee
   }
function deleteFromEmployeeByKey(employee, label) {
    const employee3 = {...employee}
    delete employee3[label]
    return employee3
}
function destructivelyDeleteFromEmployeeByKey(employee, label) {
    delete employee[label]
    return employee
}
