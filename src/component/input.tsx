import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

const InputText = () => {
  const [contentText, onChangeInput] = React.useState("think your happy moment :)");

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeInput}
        value={contentText}
        placeholder="placeholder"
        
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#EFF3EA',
    height : 200,
    width :280,
    padding :10,
  },
});

export default InputText;