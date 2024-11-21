interface LayoutProps {
  children: React.ReactNode;
}
function HeadLayout(props: LayoutProps) {
  return (
    <div>
      <header>헤더입니다.!!</header>
      <div>{props.children}</div>
    </div>
  );
}
export default HeadLayout;
