import { flattenError } from "zod";

import { buildRequestSchema } from "@/lib/schemas";

export type BuildRequestResult =
  | { ok: true }
  | { ok: false; message: string; fieldErrors?: Record<string, string[]> };

/**
 * Validate requests without reporting success until a real delivery
 * destination is connected. Never log visitors' contact or scheduling details.
 */
export async function submitBuildRequest(
  input: unknown,
): Promise<BuildRequestResult> {
  const parsed = buildRequestSchema.safeParse(input);

  if (!parsed.success) {
    return {
      ok: false,
      message: "Some details need another look.",
      fieldErrors: flattenError(parsed.error).fieldErrors,
    };
  }

  return {
    ok: false,
    message:
      "Your details have not been sent. Please contact justjarviscrm@gmail.com for assistance.",
  };
}
