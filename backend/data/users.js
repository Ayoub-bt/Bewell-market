import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin",
    email: "admin@email.com",
    phone: "0600000000",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Boudarbat Ayoub",
    email: "ayoub@email.com",
    phone: "0644327878",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Benhammou Abdelkrim",
    email: "ab.benhammou70@gmail.com",
    phone: "0661455978",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
