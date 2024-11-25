'use server';

import { updateCoffeeStore } from '@/lib/airtable';

type State = { id: string; voting: number } | undefined;

export const upvoteAction = async (prevState: State) => {
  console.log('upvote action');

  // Check if prevState is undefined
  if (!prevState) {
    console.error('State is undefined');
    return undefined; // Return undefined if state is invalid
  }

  const { id } = prevState;

  try {
    const data = await updateCoffeeStore(id);
    console.log({ data });

    if (data) {
      return {
        voting: data.length > 0 ? data[0].voting : 0,
        id,
      };
    }
  } catch (error) {
    console.error('Error in upvoteAction:', error);
    return undefined; // Handle errors gracefully
  }

  return undefined; // Ensure a return value for all paths
};
