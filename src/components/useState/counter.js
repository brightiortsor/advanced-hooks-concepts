import { Box, Button, Flex, Center } from "@chakra-ui/react";
import { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  // useEffect(() => {
  //   const interval = setInterval(increment, 1000);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  //adding an item to an array
  const [items, setItems] = useState([]);

  const handleAddItem = () => {
    setItems((prevItems) => [
      ...prevItems,
      {
        id: prevItems.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };

  return (
    <Box>
      <h1>Counter</h1>
      <Center gap={4} my={3}>
        <Button onClick={increment}>+</Button>
        <span>{count}</span>
        <Button onClick={decrement}>-</Button>
      </Center>
      <Button onClick={() => setCount(0)}>Reset</Button>

      <h1>Adding an item to an array</h1>
      <Button onClick={handleAddItem} mt={8}>
        Add Item
      </Button>
      <Center gap={4} my={3}>
        <Box>
          {items.map((item) => (
            <Flex key={item.id} align="center" justify="space-between" my={2}>
              <span>{item.value}</span>
            </Flex>
          ))}
        </Box>
      </Center>
    </Box>
  );
}

export default Counter;
