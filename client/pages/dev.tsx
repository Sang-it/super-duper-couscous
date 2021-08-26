import { withUrqlClient } from "next-urql";
import { URQLClient } from "../utils/createClient";

const Dev = () => {
  const [, verifyMasterPIN] = useVerifyMasterPinMutation();

  const fetch = async () => {
    const { data, error } = await verifyMasterPIN({ masterPIN: "1234" });
    console.log(data);
  };

  useEffect(() => {
    fetch();
  }, []);

  return <div>hey</div>;
};

export default withUrqlClient(URQLClient, { ssr: true })(Dev);
