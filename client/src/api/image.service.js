export async function getStory(userInput) {
    try {
      const response = await fetch('http://localhost:3000/getStory', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userInput }),
      });
  
      if (!response.ok) {
        throw new Error('API request failed');
      }
  
      const data = await response.json();
      return data.generated_phrases;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }
  