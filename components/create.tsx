"use client";
import * as Dialog from '@radix-ui/react-dialog';

const CreateStablecoinModal = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button 
          className="bg-secondary hover:bg-secondary/80 text-white rounded-full px-8 py-4 text-lg"
        >
          Create Stablecoin
        </button>
      </Dialog.Trigger>
      
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-lg">
          {/* Your modal content here */}
          <Dialog.Title className="text-xl font-bold mb-4">
            Create Your Stablecoins
          </Dialog.Title>
          {/* Add your form elements here */}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default CreateStablecoinModal;
