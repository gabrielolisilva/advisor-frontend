import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { ApiResponse } from "../interfaces/globals.interfaces";

export default class ApiRepository {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private async requestAxios(config: AxiosRequestConfig): Promise<ApiResponse> {
    try {
      const response: AxiosResponse = await axios(config);

      return {
        data: response.data,
        status: response.status,
        statusText: response.statusText,
        success: true,
      };
    } catch (err: any) {
      return {
        data: [],
        status: 500,
        statusText: err.message,
        success: false,
      };
    }
  }

  async get(url: string): Promise<ApiResponse> {
    const config: AxiosRequestConfig = {
      method: "get",
      url: `${this.baseUrl}${url}`,
    };
    return this.requestAxios(config).then((response) => response);
  }

  async post(url: string, data: any): Promise<ApiResponse> {
    const config: AxiosRequestConfig = {
      method: "post",
      url: `${this.baseUrl}${url}`,
      data,
    };

    return this.requestAxios(config).then((response) => response);
  }

  async put(url: string, data: any): Promise<ApiResponse> {
    const config: AxiosRequestConfig = {
      method: "put",
      url: `${this.baseUrl}${url}`,
      data,
    };
    return this.requestAxios(config).then((response) => response);
  }

  async delete(url: string): Promise<ApiResponse> {
    const config: AxiosRequestConfig = {
      method: "delete",
      url: `${this.baseUrl}${url}`,
    };
    return this.requestAxios(config).then((response) => response);
  }
}
