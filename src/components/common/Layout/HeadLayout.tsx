import styled from 'styled-components';
import Button from '../Button/Button';

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 16px;

  border-bottom: 1px solid #ccc;
`;
const LoginBox = styled.div`
  display: flex;
  gap: 4px;
`;

interface LayoutProps {
  children: React.ReactNode;
}
function HeadLayout(props: LayoutProps) {
  return (
    <>
      <Head>
        <div>로고</div>
        <LoginBox>
          <Button label="로그인" variant="white" />
          <Button label="회원가입" />
        </LoginBox>
      </Head>
      <div>{props.children}</div>
    </>
  );
}
export default HeadLayout;
