import { CatDto } from "@/DTOs/catDto";
import { Cat } from "../Cat.interface";

export function createCatFromDTO(dto: CatDto): Cat {
    return {
      breedName: dto.name,
      origin: dto.origin,
      affectionLevel: dto.affection_level,
      intelligence: dto.intelligence,
      imageUrl:dto.reference_image_id 
      ?`https://cdn2.thecatapi.com/images/${dto.reference_image_id}.jpg`
      :''
    };
  } 