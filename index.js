const endpoint = "http://localhost:8080";

main();

function main() {
  console.log(`Perform all tests ...`);
  createStudentWithNameParts();
  createStudentWithFullName();
  createTeacherWithNameParts();
  createTeacherWithFullName();
}

async function createStudentWithNameParts() {

  const result = await fetch(endpoint + "/students", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(
    {
      firstName: "Peter",
      middleName: "Heronimous",
      lastName: "Lind",
      house: "Gryffindor",
      schoolYear: 6,
    }
  ),
  }).then(response => response.json());

  // Check if the student was created with all properties
  if (result.id != undefined && 
    result.firstName === "Peter" && 
    result.middleName === "Heronimous" && 
    result.lastName === "Lind" && 
    result.house === "Gryffindor" && 
    result.schoolYear === 6 && 
    result.fullName === "Peter Heronimous Lind") {
    console.log(`✅ Student created with name parts`);
  } else {
    console.error(`❌ Student was not created with name parts`);
    console.error(result);
  }
}

async function createStudentWithFullName() {

  const result = await fetch(endpoint + "/students", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(
      {
        name: "Peter Heronimous Lind",
        house: "Gryffindor",
        schoolYear: 7,
      }
    ),
  }).then(response => response.json());

  // Check if the student was created with all properties
  if (result.id != undefined && 
    result.firstName === "Peter" && 
    result.middleName === "Heronimous" && 
    result.lastName === "Lind" && 
    result.fullName === "Peter Heronimous Lind" &&
    result.house === "Gryffindor" && 
    result.schoolYear === 7 ) {
    console.log(`✅ Student created with full name`);
  } else {
    console.error(`❌ Student was not created with full name`);
    console.error(result);
  }
}

async function createTeacherWithNameParts() {

  const result = await fetch(endpoint + "/teachers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(
    {
      firstName: "Severus",
      middleName: "Prince",
      lastName: "Snape",
      house: "Slytherin",
      schoolYear: 16,
    }
  ),
  }).then(response => response.json());
  
  // Check if the teacher was created with all properties
  if (result.id != undefined && 
    result.firstName === "Severus" && 
    result.middleName === "Prince" && 
    result.lastName === "Snape" && 
    result.fullName === "Severus Prince Snape" &&
    result.house === "Slytherin" ) {
    console.log(`✅ Teacher created with name parts`);
  } else {
    console.error(`❌ Teacher was not created with name parts`);
    console.error(result);
  }
}

async function createTeacherWithFullName() {

  const result = await fetch(endpoint + "/teachers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(
    {
      name: "Minerva McGonagall",
      house: "Gryffindor",
      schoolYear: 47,
    }
  ),
  }).then(response => response.json());

  // Check if the teacher was created with all properties
  if (result.id != undefined && 
    result.firstName === "Minerva" && 
    result.middleName === null && 
    result.lastName === "McGonagall" && 
    result.fullName === "Minerva McGonagall" &&
    result.house === "Gryffindor" ) {
    console.log(`✅ Teacher created with full name`);
  } else {
    console.error(`❌ Teacher was not created with full name`);
    console.error(result);
  }
}
