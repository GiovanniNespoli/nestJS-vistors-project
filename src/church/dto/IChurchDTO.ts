interface ICreateChurchDTO {
  id: string;
  churchName: string;
  visitorsNumber: number;
  groupLeader?: string;
  churchMinister?: string;
}

export { ICreateChurchDTO };
