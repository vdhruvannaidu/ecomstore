import { z } from "zod";

export const productSchema = z.object({
    name: z.string(),
    description: z.string(),
    tags: z.array(z.string({
        message: "tags can't be empty!"
    })),
    price: z.number().int().positive().safe()
});