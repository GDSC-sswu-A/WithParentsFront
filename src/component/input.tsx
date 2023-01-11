import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

const InputText = () => {
  const [contentText, onChangeInput] = React.useState('');

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeInput}
        value={contentText}
        placeholder="Think your happy moment :)"
        textAlignVertical="top"
        
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#EFF3EA',
    height : 200,
    width :280,
    padding :18,
    

  },
});

export default InputText;