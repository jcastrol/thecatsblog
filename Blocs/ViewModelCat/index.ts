import { GET } from "@/Data/ApiCats";
import { Cat } from "@/Models/Cat.interface";
import { createCatFromDTO } from "@/Models/Fabric/catFabric";

export default class ViewModelCat {
  cats: Cat[] = [];

  constructor() {
    this.cats = [];
  }

  async getCats() {
    const resp = await GET();
    this.cats = resp.map((cat) => createCatFromDTO(cat));
    return this.cats;
  }
}
