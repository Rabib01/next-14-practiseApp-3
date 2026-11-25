import { getUsers } from "@/actions/user";

export default async function UserList() {
  const users = await getUsers();

  // return (
  //   <div className="bg-red-500 text-white p-10">
  //     This motherfucker is rendering something !{" "}
  //   </div>
  // );

  return (
    <div className="box-secondary mt-10">
      <h2 className="text-gray-800">User List</h2>

      {users?.length > 0 ? (
        <div>
          {users.map((user, index) => (
            <p className="text-2xl text-mauve-950" key={user._id}>
              {index + 1}: {user.name} - {user.email}
            </p>
          ))}
        </div>
      ) : (
        <div>No user found!</div>
      )}
    </div>
  );
}
