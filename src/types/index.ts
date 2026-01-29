export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Benefit {
  id: number;
  number: string;
  title: string;
  description: string;
}

export interface Statistic {
  id: number;
  percentage: string;
  description: string;
}

export interface MarketingPoint {
  id: number;
  title: string;
  description: string;
}