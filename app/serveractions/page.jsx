import NewUserForm from "@/components/NewUserForm";
import UserList from "@/components/UserList";

export default async function ServerActions() {
  return (
    <div>
      <h1 className="text-gray-800 text-4xl text-center">USER REGISTRATION</h1>
      <NewUserForm />
      <UserList />
    </div>
  );
}
