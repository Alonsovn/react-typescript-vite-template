// import { Alert, Spin } from "antd";
// import { useGetUsersDataQuery } from "../../Redux/Api/api";

const UserAccount: React.FC = () => {
  // const { data: users, isLoading, error } = useGetUsersDataQuery({});
  // console.log("users", users);

  // if (isLoading) return <Spin />;
  // if (error) return <Alert message="Failed to load users" type="error" />;

  return (
    <div>
      <h1>
        {/* Hello {users.name} {users.lastName} */}
        Hello user!
      </h1>
    </div>
  );
};

export { UserAccount };
