import { offerPayload, datetimePayload } from "./query.js"
import { client } from "./client.js";


export async function fetchMyModels() {
    try {
      const data = await client.fetch(offerPayload);
      console.log("Fetched myModels:", data);
      return data;
    } catch (error) {
      console.error("Error fetching myModels:", error);
      return [];
    }
  }

  export async function datetime() {
    try {
      const data = await client.fetch(datetimePayload);
      console.log("Fetched myModels:", data);
      return data;
    } catch (error) {
      console.error("Error fetching myModels:", error);
      return [];
    }
  }