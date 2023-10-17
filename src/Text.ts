type Props = {
  color: string;
  fontSize: string;
};

export const Text = (props: Props) => {
  const { color, fontSize } = props;
  return <p style={{ color, fontSize }}>テキストです</p>;
};
