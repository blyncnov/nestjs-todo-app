// A simple Mocked Data for our application
// Blyncnov - bholuwatife00@gmail.com - https://pro-blyncnov.vercel.app

// TS - Todo Data type
interface TodoDataType {
  todos: {
    id: number;
    title: string;
    description: string;
    iscompleted: boolean;
    status: StatusEnum;
    created_at: Date;
    updated_at: Date;
  }[];
}

// TS - Todo Status ENUM
enum StatusEnum {
  WAITING = 'waiting',
  PENDING = 'pending',
  FINISHED = 'finished',
}

// TS - Fake Data Information
export const Data: TodoDataType = {
  todos: [
    {
      id: 1,
      title: 'I am working on a new project 1',
      description: 'What do you think ?',
      iscompleted: true,
      status: StatusEnum.FINISHED,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 2,
      title: 'I am working on a new project 2',
      description: 'What do you think ?',
      iscompleted: false,
      status: StatusEnum.WAITING,
      created_at: new Date(),
      updated_at: new Date(),
    },
  ],
};

export default Data;
