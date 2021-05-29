import React from 'react';
import {Text} from 'react-native';
import Content from '../../components/Content';
import {Colors, Fonts} from '../../theme';

const Home = () => {
  return (
    <Content>
      <Text style={Fonts.style.bold(Colors.light, Fonts.size.bigTitle, 'left')}>
        Big title
      </Text>
      <Text style={Fonts.style.bold(Colors.light, Fonts.size.h1, 'left')}>
        h1
      </Text>
      <Text style={Fonts.style.bold(Colors.light, Fonts.size.h1, 'left')}>
        h2
      </Text>
      <Text style={Fonts.style.bold(Colors.light, Fonts.size.h1, 'left')}>
        h3
      </Text>
      <Text style={Fonts.style.bold(Colors.light, Fonts.size.h1, 'left')}>
        h4
      </Text>
      <Text style={Fonts.style.bold(Colors.light, Fonts.size.h1, 'left')}>
        h5
      </Text>
      <Text style={Fonts.style.bold(Colors.light, Fonts.size.h1, 'left')}>
        h6
      </Text>
      <Text style={Fonts.style.bold(Colors.light, Fonts.size.medium, 'left')}>
        medium
      </Text>
      <Text style={Fonts.style.bold(Colors.light, Fonts.size.input, 'left')}>
        input
      </Text>
      <Text style={Fonts.style.bold(Colors.light, Fonts.size.regular, 'left')}>
        regular
      </Text>
      <Text style={Fonts.style.bold(Colors.light, Fonts.size.small, 'left')}>
        small
      </Text>
      <Text style={Fonts.style.bold(Colors.light, Fonts.size.tiny, 'left')}>
        tiny
      </Text>
    </Content>
  );
};

export default Home;
