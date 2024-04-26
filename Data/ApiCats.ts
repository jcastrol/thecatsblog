import { CatDto } from "@/DTOs/catDto";
import { APIKEY, URL_API } from "@/constants/Api";

export async function GET(): Promise<CatDto[]>{
    
  
    const response = await fetch(
      URL_API,
      {
        headers: {
          'x-api-key': APIKEY!,
        },
      }
    );
    
     const res = await response.json();
     return res;
    
  }