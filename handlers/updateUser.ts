import { updateUser } from "../services/users.ts";

export default async ({ params, request, response }) => {
    const userId = params.id;
    if (!(userId && request.hasBody)) {
        response.status = 400;
        response.body = { msg: userId ? "Invalid user data" : "Invalid user id" };
        return;
    }

    const { value: { name, role, jiraAdmin } } = await request.body();

    await updateUser(userId, { name, role, jiraAdmin });

    response.body = { msg: "User updated" };
}