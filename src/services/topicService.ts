// Data managetment and APi calls for forum data
import { showToast } from "../utils/utils";
import { db } from "./firebaseConfig";
import { ref, get, DatabaseReference, DataSnapshot } from "firebase/database";

//Kevin's code
export const getTopics = async (): Promise<void> => {
  const dataref: DatabaseReference = ref(db, "topics");
  try {
    const data: DataSnapshot = await get(dataref);
    if (data.exists()) {
      return data.val();
    } else {
      return;
    }
  } catch (error) {
    showToast("Kunde inte hämta ämnen, testa igen", 5000);
    console.log(error);
  }
};

//Kevin's code
export async function checkTopicExists(topicName: string): Promise<boolean> {
  try {
    const dataRef: DatabaseReference = ref(db, "topics/" + topicName);
    const data: DataSnapshot = await get(dataRef);
    return data.exists();
  } catch (error) {
    showToast("Kunde inte hitta ämnet, testa igen", 5000);
    console.log(error);
    return false;
  }
}
