export default interface IChurch {
  id: string;
  churchName: string;
  visitorsNumber: number;
  groupLeader?: string;
  churchMinister?: string;
  createAt?: Date;
  updateAt?: Date;
}
