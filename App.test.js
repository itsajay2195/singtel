import React from 'react';
import {
  render,
  waitForElement,
  fireEvent,
} from 'react-native-testing-library';

import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import {TouchableOpacity,Text} from 'react-native';



describe('Header', () => {
    test('header component renders with the restart button ', async () => {
      const { queryByTestId, getByTestId } = render(<Header />);
  
      expect(queryByTestId('post-row-0')).toBeNull();
  
      expect(getByTestId('restart-btn-to'));
    });

    test('header component renders with the Steps text and Steps Counter ', async () => {
        const { getByTestId } = render(<Header />);

        expect(getByTestId('steps-text'));
        expect(getByTestId('steps-counter'));
      });

    test ('restart Button is tappable', async()=>{
        const onPress = jest.fn();
        const {getByText} = render(<TouchableOpacity onPress={onPress}> <Text>Restart</Text></TouchableOpacity>);
        fireEvent.press(getByText('Restart'));
        expect(onPress).toHaveBeenCalled();
    })

  });