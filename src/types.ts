type ValueAndDetail = {
  value: number;
  detail: string;
};

export interface StringMap {
  [key: string]: string;
}

export interface ICountry {
  name: string;
  iso2: string;
  iso3: string;
}

export interface IStatsResponse {
  confirmed: ValueAndDetail;
  recovered: ValueAndDetail;
  deaths: ValueAndDetail;
  lastUpdate: Date;
}

export type CountryResponse = {
  countries: ICountry[];
};

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
