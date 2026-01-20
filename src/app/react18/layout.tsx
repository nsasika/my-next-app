export default function React18Layout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div>
        <h1>React 18 Features Layout</h1>
        <div>{children}</div>
      </div>
    );
  }