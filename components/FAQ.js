import { Modal, ModalContent, ModalOverlay, ModalFooter, ModalCloseButton, ModalHeader, ModalBody, Button, useDisclosure } from '@chakra-ui/react'
import FAQText from './FAQText';

export default function FAQ() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        colorScheme="teal"
        variant="ghost"
        size="lg"
        bg='purple.100'
        whiteSpace='normal'
        w='100%'
        h='100%'
        p='5%'
        onClick={onOpen}>Read our FAQ</Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader pt={[200, 150, 50]} color='purple.500'>Frequently Asked Questions</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FAQText />
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="teal"
              variant="ghost"
              size="lg"
              w='100%'
              h='100%'
              p='5%'
              whiteSpace='normal'
              onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )

}