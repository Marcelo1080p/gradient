import axios, { AxiosInstance, AxiosResponse } from "axios";

interface IGradient {
  id: number;
  directionGradient: string;
  gradientData: string;
}

export class ApiGradient {
  api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: "https://localhost:7103/api",
    });
  }

  async getAllGradients(): Promise<IGradient[]> {
    try {
      const response: AxiosResponse<IGradient[]> = await this.api.get(
        "/Gradient"
      );
      return response.data;
    } catch (erro) {
      console.log("Error fetching gradients: ", erro);
      throw erro;
    }
  }
}
