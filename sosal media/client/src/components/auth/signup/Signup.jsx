import { Button, FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Password from "../Password";

const Signup = () => {
  const [password,setPassword] = useState('')
  const [email,setEmail] = useState('')
  const [name,setName] = useState('')
  const [confirmPassword,setConfirmPassword] = useState('')
  const handelSubmit = () => {
    console.log({password,email,name,confirmPassword})
  }
  return (
    <>
      <FormControl boxShadow={'xl'} borderRadius={'10px'} margin={'auto'} mt={'40px'} w={{sm:'450px'}} p={'40px'} border={{sm:'1px solid black'}}  >
        <Text fontSize={'35px'} textAlign={'center'} fontWeight={'500'} >Signup</Text>
        <FormLabel >Full Name</FormLabel>
        <Input onClick={(e) => setName(e.target.value)} type="text" />

        <FormLabel  mt={'20px'} >Email address</FormLabel>
        <Input onClick={(e) => setEmail(e.target.value)} type="email" />

        <FormLabel mt={'20px'}>Password</FormLabel>
        <Password placeholderText={"password"} setPassword={setPassword}  />

        <FormLabel mt={'20px'}>Confirm Password</FormLabel>
        <Input onClick={(e) => setConfirmPassword(e.target.value)} type="password" placeholder="confirm password" />

        <Button onClick={handelSubmit} mt={'20px'} w={'100%'} colorScheme='twitter' >Submit</Button>
        <Link style={{backgroundColor: 'white'}} to={'/signin'} >Already have an acount</Link>
      </FormControl>
    </>
  );
};

export default Signup;
