interface CreateUserDto {
  name: string;
  userName: string;
  password: string;
  type: "teacher" | "student";
}
