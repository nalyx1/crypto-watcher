'use server';
import bcrypt from 'bcrypt';

export async function createHash(password: string) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}

export async function compareHash(password: string, hash: string) {
  return bcrypt.compareSync(password, hash);
}
