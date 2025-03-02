import { useNavigate } from "react-router-dom";
import Button from '../../components/Button/Button';

function NotFoundPage() {
  const navigate = useNavigate()

  const handleGoBackBtn = () => {
    navigate('/')
  };

  return (
    <div>
      <div>404: Page Is Not Found</div>
      <Button title="Go Home" onBtnClick={handleGoBackBtn} />
    </div>
  )
}

export default NotFoundPage