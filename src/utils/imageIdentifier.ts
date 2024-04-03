import blackPanterImage from "../../public/media/black-panther.png";
import redPandaImage from "../../public/media/red-panda.png";
import babirusaImage from "../../public/media/babirusa.png";


//Kevin's code
/**
 *  Default image is black panther
 * @param imageName 
 * @returns path to image
 */
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
