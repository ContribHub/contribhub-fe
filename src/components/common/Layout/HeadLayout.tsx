interface LayoutProps {
  children: React.ReactNode;
}
function HeadLayout(props: LayoutProps) {
  return (
    <div>
      <div>
        <div>로고</div>
        <div>로그인 영역</div>
      </div>
      <div>{props.children}</div>
    </div>
  );
}
export default HeadLayout;
