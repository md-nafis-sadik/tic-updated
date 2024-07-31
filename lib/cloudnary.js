import { v2 as cloudinary } from "cloudinary";

if (!process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME) {
  throw new Error("CLOUDINARY_CLOUD_NAME is not set");
}

if (!process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY) {
  throw new Error("CLOUDINARY_API_KEY is not set");
}

if (!process.env.CLOUDINARY_API_SECRET) {
  throw new Error("CLOUDINARY_API_SECRET is not set");
}

export async function uploadImage(image) {
  const image = await image.arrayBuffer();
  const mime = image.type;
  const encoding = base64;
  const base64Data = Buffer.from(image).toString("base64");
  const fileUrl = `data:${mime};${encoding},${base64Data}`;

  const result = await cloudinary.uploader.upload(fileUrl, {
    folder: "ticlimited",
  });
  return result.secure_url;
}
