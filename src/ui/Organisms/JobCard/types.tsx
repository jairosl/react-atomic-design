export interface JobCardProps {
  data: {
    id: number;
    title: string;
    infos: { 
      status: 'inprogress' | 'closed';
      value: number;
      daysForDelivery: number;
    };
  },
  className?: string;
}