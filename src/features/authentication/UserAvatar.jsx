import styled from "styled-components";
import { useUser } from "../authentication/useUser";

const StyledUserAvatar = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  & img {
    display: block;
    width: 3.6rem;
    height: 3.6rem;
    border-radius: 100%;
    object-fit: cover;
  }
`;

function UserAvatar() {
  const { user } = useUser();
  const { fullName, avatar } = user.user_metadata;
  return (
    <StyledUserAvatar>
      <img src={avatar || "/default-user.jpg"} alt={`Avatar of ${fullName}`} />
      <span>{fullName}</span>
    </StyledUserAvatar>
  );
}

export default UserAvatar;
