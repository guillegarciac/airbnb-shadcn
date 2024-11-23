'use client';

import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { actionFunction } from '@/utils/types';

const initialState = {
  message: '',
};

function FormContainer({
  action,
  children,
}: {
  action: actionFunction;
  children: React.ReactNode;
}) {
  const [state, setState] = useState(initialState);
  const { toast } = useToast();

  const formAction = async (formData: FormData) => {
    try {
      const result = await action(state, formData);
      setState(result); // Update state with the result of the action
    } catch (error) {
      console.error('Error in form action:', error);
    }
  };

  useEffect(() => {
    if (state.message) {
      toast({ description: state.message });
    }
  }, [state.message, toast]);

  return <form onSubmit={(e) => { e.preventDefault(); formAction(new FormData(e.target as HTMLFormElement)); }}>{children}</form>;
}

export default FormContainer;
