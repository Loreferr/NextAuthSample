"use server";
import { z } from "zod";

const createUserSchema = z.object({
  name: z.string().min(2),
  username: z.string().min(2),
  email: z.string().email("Invalid email"),
  password: z.string().min(3),
});
export interface RegisterformErrors {
  errors?: {
    name?: string[];
    username?: string[];
    email?: string[];
    password?: string[];
  };
  success: boolean;
}
export const createUser = async (
  data: RegisterformErrors,
  formData: FormData
): Promise<RegisterformErrors> => {
  const result = createUserSchema.safeParse({
    name: formData.get("name"),
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (result.success) {
    const res = await fetch("http://localhost:8080/api/auth/register", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({
        name: formData.get("name"),
        username: formData.get("username"),
        email: formData.get("email"),
        password: formData.get("password"),
      }),
    });
    const response = await res.text();
    if (response === "User Registered") {
      console.log(response);
    } else {
      console.log("User not registered");
    }
    console.log(result.data);

    return { success: true };
  }
  return {
    success: false,
    errors: result.error.flatten().fieldErrors,
  };
};
