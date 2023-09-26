import { faker } from '@faker-js/faker';

export const MOCK_COUNT = 10_000

export interface User {
  userId: string
  username: string
  email: string
  avatar: string
  password: string
  birthDate: Date
  registeredAt: Date
}

export const genSingleUser = (): User => ({
  userId: faker.string.uuid(),
  username: faker.internet.userName(),
  email: faker.internet.email(),
  avatar: faker.image.avatar(),
  password: faker.internet.password(),
  birthDate: faker.date.birthdate(),
  registeredAt: faker.date.past(),
})

export default function fakeData(): User[] {
  return Array.from({ length: MOCK_COUNT }, () => genSingleUser());
}
