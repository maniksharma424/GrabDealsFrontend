import axios from "axios";

const api = axios.create({
  baseURL: "https://api.grabdeals.site",
});

// Add auth token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const productService = {
  // Get user's keywords/products
  async getProducts() {
    const response = await api.get("/keywords");
    console.log(response.data);
    return response.data.data;
  },

  // Add a new keyword/product
  async addProduct(name: string) {
    const response = await api.post("/keywords", {
      keyword: name.toLowerCase(),
    });
    return response.data;
  },

  // Delete keywords/products
  async deleteProducts(ids: number[]) {
    const response = await api.delete("/keywords", {
      data: { ids },
    });
    return response.data;
  },

  // Helper to handle errors
  handleError(error: any) {
    if (error.response?.status === 401) {
      // Redirect to login if unauthorized
      localStorage.removeItem("access_token");
      window.location.href = "/login";
    }
    throw error;
  },
};
