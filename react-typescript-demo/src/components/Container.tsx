type ContainerProps = {
  styles: React.CSSProperties;
};

function Container({ styles }: ContainerProps) {
  return <div style={styles}>Text Content</div>;
}

export default Container;
