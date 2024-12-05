interface ICreateChurchDTO {
  id: string;
  churchName: string;
  visitorsNumber: number;
  groupLeader?: string;
  churchMinister?: string;
}

interface IUpdateChurchDTO {
  churchName?: string;
  visitorsNumber?: number;
  groupLeader?: string;
  churchMinister?: string;
}

export { ICreateChurchDTO, IUpdateChurchDTO };
