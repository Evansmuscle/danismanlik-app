import { Student, Teacher } from "@prisma/client";

export async function createUser({
  name,
  password,
  userName,
  type,
}: CreateUserDto): Promise<
  "Cannot connect to the server, please try again." | Student | Teacher
> {
  if (!prisma) {
    return "Cannot connect to the server, please try again.";
  }

  if (type === "student") {
    const student = await prisma.student.create({
      data: {
        name,
        password,
        userName,
      },
    });

    return student;
  }

  const teacher = await prisma.teacher.create({
    data: {
      name,
      password,
      userName,
    },
  });

  return teacher;
}

export async function findAllTeachers() {
  if (!prisma) {
    return "Cannot connect to the server, please try again.";
  }

  const teachers = await prisma.teacher.findMany();

  return teachers;
}
