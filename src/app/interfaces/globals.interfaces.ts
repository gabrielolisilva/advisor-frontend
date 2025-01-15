export interface ApiResponse {
  data: any;
  status: number;
  statusText: string;
  success: boolean;
}

export interface ICategories {
  id: string;
  name: string;
  created_at: Date;
  updated_at: Date;
}
