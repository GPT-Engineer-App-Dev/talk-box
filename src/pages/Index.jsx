import { Box, VStack, Text, Input, Button, useToast } from '@chakra-ui/react';
import { useState } from 'react';

const Index = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const toast = useToast();

  const sendMessage = () => {
    if (input.trim() === '') {
      toast({
        title: 'Cannot send empty message.',
        status: 'warning',
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    setMessages([...messages, { id: messages.length + 1, text: input }]);
    setInput('');
  };

  return (
    <Box w="100%" p={4} maxW="600px" mx="auto">
      <VStack spacing={4}>
        <Text fontSize="2xl" fontWeight="bold">WhatsApp Clone</Text>
        <Box w="100%" bg="gray.100" p={4} borderRadius="lg" overflowY="auto" maxH="400px">
          {messages.map(message => (
            <Box key={message.id} bg="teal.100" p={3} borderRadius="md" mb={2}>
              {message.text}
            </Box>
          ))}
        </Box>
        <Input
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
        />
        <Button colorScheme="teal" onClick={sendMessage}>Send</Button>
      </VStack>
    </Box>
  );
};

export default Index;