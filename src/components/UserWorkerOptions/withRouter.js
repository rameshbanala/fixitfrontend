import { useParams,useNavigate } from "react-router-dom";

const withRouter = (Component) => {
  const Wrapper = (props) => {
    const params = useParams();
    const navigate = useNavigate();
    return <Component {...props} navigate={navigate}  params={params} />;
  };

  return Wrapper;
};
export default withRouter