import blackPanterImage from "../../public/media/black-panther.png";
import redPandaImage from "../../public/media/red-panda.png";
import babirusaImage from "../../public/media/babirusa.png";

export function getImagePath(imageName: string): string {
  switch (imageName) {
    case "black-panther":
      return blackPanterImage;
    case "red-panda":
      return redPandaImage;
    case "babirusa":
      return babirusaImage;
    default:
      return blackPanterImage;
  }
}
