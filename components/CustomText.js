import { Text } from 'react-native';

function CustomText({ variant, children, ...props }) {
  const variantsMapping = {
    h1: 21,
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    subheading1: "h6",
    subheading2: "h6",
    body1: 16,
    body2: "p",
  };

  const size = variant ? variantsMapping[variant] : 16;

  return (
    <Text style={{ fontFamily: 'Inter-Regular', fontSize: size }} {...props}>
      {children}
    </Text>
  );
}

export default CustomText;
