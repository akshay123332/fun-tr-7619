import { useState, useEffect } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Text,
  useDisclosure,
  FormHelperText,
  usePopover,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  IconButton,
  Box
} from "@chakra-ui/react";

const Signup = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [formData, setFormData] = useState({});
  const [error, setError] = useState("");
  const [userCredentials, setUserCredentials] = useState(JSON.parse(localStorage.getItem("user-credentials")));
  const { isOpen: isPopoverOpen, onOpen: onPopoverOpen, onClose: onPopoverClose } = usePopover();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError("Please fill in all the fields");
      return;
    }
    localStorage.setItem("user-credentials", JSON.stringify(formData));
    setUserCredentials(formData);
    setError("");
    onClose();
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const logout = () => {
    localStorage.removeItem("user-credentials");
    setUserCredentials(null);
    onPopoverClose();
  };

  useEffect(() => {
    setUserCredentials(JSON.parse(localStorage.getItem("user-credentials")));
  }, []);

  return (
    <>
    {!userCredentials ? (
       <Button onClick={onOpen}>Sign Up</Button>
    ) : (
      <Popover placement="bottom" onClose={onPopoverClose} isOpen={isPopoverOpen}>
        <PopoverTrigger>
          <Box as="span" cursor="pointer" onClick={onPopoverOpen}>
            {userCredentials.firstName}
          </Box>
        </PopoverTrigger>
        <PopoverContent zIndex={4}>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>{userCredentials.firstName}</PopoverHeader>
          
          <PopoverBody>
            <IconButton
              aria-label="logout"
              icon="logout"
              size="xs"
              onClick={logout}
            />
            Logout
          </PopoverBody>
        </PopoverContent>
        </Popover>
    )}
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sign Up</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit}>
              <FormControl isInvalid={error !== ""}>
                <FormLabel>First Name</FormLabel>
                <Input name="firstName" onChange={handleChange} />
                <FormLabel>Last Name</FormLabel>
                <Input name="lastName" onChange={handleChange} />
                <FormLabel>Mobile Number</FormLabel>
                <Input name="mobileNumber" onChange={handleChange} />
                <FormLabel>Email</FormLabel>
                <Input name="email" onChange={handleChange} type="email" />
                <FormLabel>Password</FormLabel>
                <Input name="password" onChange={handleChange} type="password" />
                <FormHelperText id="email-helper-text" mt={2}>
                  {error}
                </FormHelperText>
              </FormControl>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button onClick={handleSubmit}>Sign Up</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Signup;

