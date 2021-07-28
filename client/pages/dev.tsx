import { withUrqlClient } from "next-urql";
import {
  useLoginUserMutation,
  useGetCredentialsQuery,
} from "../generated/graphql";
import { URQLClient } from "../utils/createClient";
import { decode } from "../utils/decode";

const Dev = () => {
  const [, loginUser] = useLoginUserMutation();
  const [{ data }] = useGetCredentialsQuery();
  // const [{ data }] = useMeQuery();

  if (data?.getCredentials)
    console.log(decode(data.getCredentials[0].password));

  // useEffect(() => {
  //   const loginU = async () =>
  //     await loginUser({
  //       email: "vidur@vidur.com",
  //       password: "vid123!@",
  //     });
  //   };
  //   loginU();
  // }, []);

  return <div>Hey there</div>;
};

export default withUrqlClient(URQLClient, { ssr: true })(Dev);
