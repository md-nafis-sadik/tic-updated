import { Lucia } from "lucia";
import { adapter } from "./adapter";
import { cookies } from "next/headers";

const lucia = new Lucia(adapter, {
  sessionCookie: {
    expires: false,
  },
});

export async function createAuthSession(userId) {
  const session = await lucia.createSession(userId, {});
  const sessionCookie = await lucia.createSessionCookie(session.id);
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );
}
