import Button from '../Button/Button';

interface LayoutProps {
  children: React.ReactNode;
}
function HeadLayout(props: LayoutProps) {
  return (
    <div>
      <div>
        <div>로고</div>
        <div>
          <Button label="로그인" />
        </div>
      </div>
      <div>{props.children}</div>
    </div>
  );
}
export default HeadLayout;
