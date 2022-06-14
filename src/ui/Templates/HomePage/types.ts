export interface Jobs {
  id: number;
  title: string;
  infos: { 
    status: 'inprogress' | 'closed';
    value: number;
    daysForDelivery: number;
  };
}

export interface HomePageProps {
    JobsData: Jobs[]
}