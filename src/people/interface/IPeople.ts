export default interface IPeople {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  position?: string;
  churchName?: string;
  observation: string;
  createAt?: Date;
  updateAt?: Date;
}
