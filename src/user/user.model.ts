export type UserType = {
  id: Number;
  name: String;
  nickname: String;
  email: String;
  freinds?: Number[];
  block?: Number[];
};

export const User: UserType[] = [
  {
    id: 1,
    name: "가",
    nickname: "진희",
    email: "01@naver.com",
    freinds: [2, 3, 4],
    block: [2],
  },
  {
    id: 2,
    name: "나",
    nickname: "진희",
    email: "02@naver.com",
    freinds: [1],
    block: [],
  },
  {
    id: 3,
    name: "다",
    nickname: "진희",
    email: "03@naver.com",
    freinds: [1, 2],
    block: [],
  },
];

export default User;
