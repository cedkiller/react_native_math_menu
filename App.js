import { Text, View, ScrollView, StyleSheet, Image, TextInput, } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {useState} from 'react';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Menu">
        <Drawer.Screen name="Menu" component={Menu} />
        <Drawer.Screen name="Addition" component={Addition} />
        <Drawer.Screen name="Subtraction" component={Subtraction} />
        <Drawer.Screen name="Multiplication" component={Multiplication} />
        <Drawer.Screen name="Division" component={Division} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

function Menu ( {navigation} )
{
  return (
    <ScrollView>
      <Text style = {{fontSize: 20, marginTop: 50, fontWeight: 'bold', textAlign: 'center'}}>Mathematical Menu!</Text>

      <View style = {styles.center}>
        <Image source = {require('./assets/math.png')} style = {styles.img}/>
      </View>
    </ScrollView>
  );  
}

function Addition ( {navigation} )
{
  const [Num1, setNum1] = useState('');
  const [Num2, setNum2] = useState('');
  const n1 = parseInt(Num1);
  const n2 = parseInt(Num2);
  const res = n1 + n2;

  return (
    <ScrollView>
      <Text style = {{fontSize: 20, fontWeight: 'bold', marginTop: 15, textAlign: 'center'}}>Addition Menu</Text>

      <Text style = {styles.label}>1st Number</Text>
      <TextInput
      style = {styles.input}
      value = {Num1}
      onChangeText = {(text) => setNum1(text)}
      placeholder = "Enter your 1st number: "
      />

      <Text style = {styles.label}>2nd Number</Text>
      <TextInput
      style = {styles.input}
      value = {Num2}
      onChangeText = {(text) => setNum2(text)}
      placeholder = "Enter your 2nd number: "
      />

      <Text style = {styles.label}>Answer</Text>
      <Text style = {styles.label}>{res}</Text>
    </ScrollView>
  );
}

function Subtraction ( {navigation} )
{
  const [Num1, setNum1] = useState('');
  const [Num2, setNum2] = useState('');
  const n1 = parseInt(Num1);
  const n2 = parseInt(Num2);
  const res = n1 - n2;

  return (
    <ScrollView>
      <Text style = {{fontSize: 20, fontWeight: 'bold', marginTop: 15, textAlign: 'center'}}>Subtraction Menu</Text>

      <Text style = {styles.label}>1st Number</Text>
      <TextInput
      value = {Num1}
      style = {styles.input}
      placeholder = "Enter your 1st number: "
      onChangeText = {(text) => setNum1(text)}
      />

      <Text style = {styles.label}>2nd Number</Text>
      <TextInput
      value = {Num2}
      style = {styles.input}
      placeholder = "Enter your 2nd number: "
      onChangeText = {(text) => setNum2(text)}
      />

      <Text style = {styles.label}>Answer</Text>
      <Text style = {styles.label}>{res}</Text>
    </ScrollView>
  );
}

function Multiplication ( {navigation} )
{
  const [Num1, setNum1] = useState('');
  const [Num2, setNum2] = useState('');
  const n1 = parseInt(Num1);
  const n2 = parseInt(Num2);
  const res = n1 * n2;

  return (
    <ScrollView>
      <Text style = {{fontSize: 20, fontWeight: 'bold', marginTop: 15, textAlign: 'center'}}>Multiplication Menu</Text>

      <Text style = {styles.label}>1st Number</Text>
      <TextInput
      value = {Num1}
      style = {styles.input}
      placeholder = "Enter your 1st Number: "
      onChangeText = {(text) => setNum1(text)}
      />

      <Text style = {styles.label}>2nd Number</Text>
      <TextInput
      value = {Num2}
      style = {styles.input}
      placeholder = "Enter your 2nd Number: "
      onChangeText = {(text) => setNum2(text)}
      />

      <Text style = {styles.label}>Answer</Text>
      <Text style = {styles.label}>{res}</Text>
    </ScrollView>
  );
}

function Division ( {navigation} )
{
  const [Num1, setNum1] = useState('');
  const [Num2, setNum2] = useState('');
  const n1 = parseFloat(Num1);
  const n2 = parseFloat(Num2);
  const res = n1 / n2;

  return (
    <ScrollView>
      <Text style = {{fontSize: 20, fontWeight: 'bold', marginTop: 15, textAlign: 'center'}}>Division Menu</Text>

      <Text style = {styles.label}>1st Number</Text>
      <TextInput
      value = {Num1}
      style = {styles.input}
      placeholder = "Enter your 1st number: "
      onChangeText = {(text) => setNum1(text)}
      />

      <Text style = {styles.label}>2nd Number</Text>
      <TextInput
      value = {Num2}
      style = {styles.input}
      placeholder = "Enter your 2nd number: "
      onChangeText = {(text) => setNum2(text)}
      />

      <Text style = {styles.label}>Answer</Text>
      <Text style = {styles.label}>{res}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  img: {
    height: 350,
    width: 350,
    marginTop: 50
  },

  label: {
    fontSize: 13,
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: 15
  },

  input: {
    marginLeft: 15,
    marginTop: 15,
  }
});
