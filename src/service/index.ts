import axios, { AxiosResponse } from "axios"
import { Product } from "./types"

export const getProducts = async () => {
  const response: AxiosResponse<Product[]> = await axios.get(
    "https://qbtzliuzcvoojclmsbsm.supabase.co/rest/v1/product?select=*,variant(*),specification(*)",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFidHpsaXV6Y3Zvb2pjbG1zYnNtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY3Mjk2MDMsImV4cCI6MjAyMjMwNTYwM30.4jNWNFfWv4Z_lHpJmZnGPCYr8Gbt_RkfVhU4LOl1L1Y",
      },
    }
  )

  return response.data
}
