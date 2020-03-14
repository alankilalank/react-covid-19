type ValueAndDetail = {
  value: number;
  detail: string;
};

export interface StringMap {
  [key: string]: string;
}

export interface ICountryResponse {
  countries: Record<string, string>;
  iso3: Record<string, string>;
}

export interface IStatsResponse {
  confirmed: ValueAndDetail;
  recovered: ValueAndDetail;
  deaths: ValueAndDetail;
  lastUpdate: Date;
}

export type UseDataApiArgs = {
  initUrl: string;
  defaultData?: any;
  bodyData?: object | any[];
};

export type UseDataApiResponse<T> = [
  {
    isLoading: boolean;
    isError: boolean;
    data?: T | undefined;
  },
  // Dispatch<string>,
];
