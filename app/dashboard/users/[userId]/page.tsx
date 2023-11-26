import { users_api_url } from '@/app/lib/urls';

interface DetailUserPageProps {
  params: { userId: string };
}

const getUser = async (userId: string) => {
  const res = await fetch(`${users_api_url}?userId=${userId}`, {
    cache: 'no-store',
    next: { tags: ['user'] },
  });

  //   console.log(await res.json());
  return res.json();
};

const DetailUserPage = async (props: DetailUserPageProps) => {
  const { params } = props;
  //   console.log(params);
  const user = await getUser(params.userId);
  const createdAt = new Date(user.data.createdAt).toString();
  //   console.log(user);
  return (
    <div>
      <h1>DetailUserPage</h1>
      <div>test</div>
      <table>
        <thead></thead>
        <tbody>
          <tr>
            <td>Nama Lengkap</td>
            <td>:</td>
            <td>{user.data.fullname}</td>
          </tr>
          <tr>
            <td>Created At</td>
            <td>:</td>
            <td>{createdAt}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DetailUserPage;
