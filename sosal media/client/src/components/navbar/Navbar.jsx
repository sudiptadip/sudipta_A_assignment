import { Box, Flex,  Input, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {BiSearch} from "react-icons/bi"
import PostType from "./PostType";
import ResponsiveNav from "./ResponsiveNav";

const Navbar = () => {
  const [visible,setVisible] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 991) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Box pl={{base: '16px', md:'59px'}} pr={{base: '16px', md:'59px'}} display={'flex'} justifyContent={'space-between'} alignItems={'center'} h={"80px"} bg={'white'} position="sticky" top="0" left="0" width="100%" zIndex="100" shadow={"md"} w={"100%"}>
      <Box display={'flex'} alignItems={'center'} >
        <Box display={'flex'} fontSize={{base: '40px', md:'59px'}} fontWeight={'bold'} cursor={'pointer'} >
          <Text color={'#38ebf1'} >S</Text>
          <Text>B</Text>
        </Box>
        <Box display={'flex'} >
          <Input ml={{base: '25px', md: '50px'}}  w={{base: '150px', sm: '200px', md: '250px'}} placeholder="search" />
          <Flex p={'10px'} cursor={'pointer'} borderRightRadius={'8px'} bg={'#d8d8d8'} align={'center'}>
              <BiSearch size={'20px'} />
          </Flex>
        </Box>
      </Box>
      <Box >
        {visible ?
        <Box visibility={{base: 'hidden',  lg: 'visible'}} display={'flex'} alignItems={'center'} gap={'50px'} >
          <Flex cursor={'pointer'} alignItems={'center'} gap={'10px'} fontSize={'xl'} fontWeight={'500'} >
            <Box w={'45px'} h={'45px'} border={'1px solid black'} borderRadius={'50%'} ></Box>
            <Text>Sudipta</Text>
          </Flex>
          <PostType />
        </Box> : 
        <Box fontSize={'4xl'} >
            <ResponsiveNav />
        </Box>
        }
      </Box>
    </Box>
  );
};

export default Navbar;
