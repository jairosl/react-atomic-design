export interface infoJobProps {
  data: { 
    status: 'inprogress' | 'closed';
    value: number;
    daysForDelivery: number;
  }
}