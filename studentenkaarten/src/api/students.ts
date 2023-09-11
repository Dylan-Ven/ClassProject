//async function that fetches students
// function to convert the response from the server to the student list
const url = "http://localhost/api/students.php";

export async function fetchStudents(): Promise<Array<Student>> {
  const response = await fetch(url);
  const students = await response.json();

  return convertResponse(students);
}

function convertResponse(studentList: any[]): Array<Student> {
  const convertedStudents: Array<Student> = [];

  studentList.forEach((student) => {
    convertedStudents.push({
      id: student[0],
      firstName: student[1],
      middleName: student[2],
      lastName: student[3],
      schoolId: student[4],
      mail: student[5]
    });
  });
  
  return convertedStudents;
}

//met hoofdletter beginnen want het is een type
export type Student = {
  id: number;
  firstName: string;
  middleName?: string;
  lastName: string;
  schoolId: number;
  mail: string;
};

//student[0] id
//student[1] firstname
//student[2] middlename
//student[3] lastname
//student[4] schoolid
//student[5] email
